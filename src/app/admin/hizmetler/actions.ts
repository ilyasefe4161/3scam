"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import path from "path";
import { stringToSlug } from "@/lib/utils";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";

async function checkAuth() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
}

async function saveFile(file: File | null): Promise<string | null> {
  if (!file || file.size === 0) return null;
  const buffer = Buffer.from(await file.arrayBuffer());
  const extension = path.extname(file.name) || ".jpg";
  const nameWithoutExt = path.basename(file.name, extension).replace(/[^a-zA-Z0-9.-]/g, "_");
  const filename = `${Date.now()}-${nameWithoutExt}${extension}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  try {
    await fs.access(uploadDir);
  } catch {
    await fs.mkdir(uploadDir, { recursive: true });
  }
  const filepath = path.join(uploadDir, filename);
  await fs.writeFile(filepath, buffer);
  return `/uploads/${filename}`;
}

export async function addService(formData: FormData) {
  await checkAuth();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const image = formData.get("image") as File | null;

  if (!title || !description) return { error: "Başlık ve özet zorunludur." };

  const imageUrl = await saveFile(image);
  const slug = stringToSlug(title);

  await prisma.service.create({
    data: { title, slug, description, content, imageUrl }
  });

  revalidatePath("/admin/hizmetler");
  revalidatePath("/hizmetler");
  return { success: true };
}

export async function deleteService(id: string) {
  await checkAuth();
  await prisma.service.delete({ where: { id } });
  revalidatePath("/admin/hizmetler");
  revalidatePath("/hizmetler");
  return { success: true };
}

export async function editService(formData: FormData) {
  await checkAuth();
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const image = formData.get("image") as File | null;

  if (!id || !title || !description) return { error: "Zorunlu alanlar eksik." };

  const newImageUrl = await saveFile(image);
  const slug = stringToSlug(title);
  const dataToUpdate: any = { title, slug, description, content };
  if (newImageUrl) {
    dataToUpdate.imageUrl = newImageUrl;
  }

  await prisma.service.update({
    where: { id },
    data: dataToUpdate
  });

  revalidatePath("/admin/hizmetler");
  revalidatePath("/hizmetler");
  return { success: true };
}

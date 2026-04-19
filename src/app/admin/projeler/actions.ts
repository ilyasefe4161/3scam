"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import path from "path";

async function saveFile(file: File | null): Promise<string | null> {
  if (!file || file.size === 0) return null;
  // Buffer transformation
  const buffer = Buffer.from(await file.arrayBuffer());
  
  // Safe filename
  const extension = path.extname(file.name) || ".jpg";
  const nameWithoutExt = path.basename(file.name, extension).replace(/[^a-zA-Z0-9.-]/g, "_");
  const filename = `${Date.now()}-${nameWithoutExt}${extension}`;
  
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  
  // Ensure directory exists
  try {
    await fs.access(uploadDir);
  } catch {
    await fs.mkdir(uploadDir, { recursive: true });
  }

  const filepath = path.join(uploadDir, filename);
  await fs.writeFile(filepath, buffer);
  
  return `/uploads/${filename}`;
}


export async function addProject(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const image = formData.get("image") as File | null;

  if (!title || !description) return { error: "Başlık ve açıklama zorunludur." };

  const imageUrl = await saveFile(image);

  await prisma.project.create({
    data: {
      title,
      description,
      imageUrl
    }
  });

  revalidatePath("/admin/projeler");
  revalidatePath("/projeler");
  return { success: true };
}

export async function deleteProject(id: string) {
  await prisma.project.delete({ where: { id } });
  revalidatePath("/admin/projeler");
  revalidatePath("/projeler");
  return { success: true };
}

export async function editProject(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const image = formData.get("image") as File | null;

  if (!id || !title || !description) return { error: "Kimlik, başlık ve açıklama zorunludur." };

  const newImageUrl = await saveFile(image);

  const dataToUpdate: any = { title, description };
  if (newImageUrl) {
    dataToUpdate.imageUrl = newImageUrl;
  }

  await prisma.project.update({
    where: { id },
    data: dataToUpdate
  });

  revalidatePath("/admin/galeri");
  revalidatePath("/galeri");
  return { success: true };
}

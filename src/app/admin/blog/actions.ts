"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function stringToSlug(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

export async function addPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const published = formData.get("published") === "true";

  if (!title || !content) return { error: "Başlık ve içerik zorunludur." };

  const slug = stringToSlug(title) + "-" + Date.now().toString().slice(-4);

  await prisma.post.create({
    data: { title, slug, content, published }
  });

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  return { success: true };
}

export async function deletePost(id: string) {
  await prisma.post.delete({ where: { id } });
  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  return { success: true };
}

export async function editPost(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const published = formData.get("published") === "true";

  if (!id || !title || !content) return { error: "Zorunlu alanlar eksik." };

  await prisma.post.update({
    where: { id },
    data: { title, content, published }
  });

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  return { success: true };
}

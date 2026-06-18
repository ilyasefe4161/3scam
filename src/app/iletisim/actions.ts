"use server";

import { prisma } from "@/lib/prisma";

export async function submitContactMessage(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const content = formData.get("content") as string;

    if (!name || !email || !content) {
      return { error: "Lütfen zorunlu alanları doldurun." };
    }

    await prisma.message.create({
      data: {
        name,
        email,
        phone,
        content,
      }
    });

    return { success: true };
  } catch (error) {
    console.error("Error submitting message:", error);
    return { error: "Mesaj gönderilirken bir hata oluştu." };
  }
}

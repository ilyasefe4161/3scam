import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    const existingAdmin = await prisma.user.findUnique({
      where: { email: "admin@3scam.com.tr" }
    });

    if (existingAdmin) {
      return NextResponse.json({ message: "Admin user already exists." });
    }

    const hashedPassword = await bcrypt.hash("Admin123!", 10);
    await prisma.user.create({
      data: {
        name: "Yönetici",
        email: "admin@3scam.com.tr",
        password: hashedPassword,
      }
    });

    return NextResponse.json({ message: "Admin user created successfully. Email: admin@3scam.com.tr, Password: Admin123!" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to setup admin user." }, { status: 500 });
  }
}

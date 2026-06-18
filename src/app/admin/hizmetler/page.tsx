import { prisma } from "@/lib/prisma";
import ServicesClient from "./ServicesClient";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AdminServices() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/admin/login");
  }
  const services = await prisma.service.findMany({
    orderBy: { createdAt: "asc" }
  });

  return <ServicesClient initialServices={services} />;
}

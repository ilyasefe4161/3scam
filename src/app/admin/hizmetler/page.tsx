import { prisma } from "@/lib/prisma";
import ServicesClient from "./ServicesClient";

export default async function AdminServices() {
  const services = await prisma.service.findMany({
    orderBy: { createdAt: "asc" }
  });

  return <ServicesClient initialServices={services} />;
}

import { prisma } from "@/lib/prisma";
import GalleryClient from "./GalleryClient";

export default async function AdminGallery() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" }
  });

  return <GalleryClient initialProjects={projects} />;
}

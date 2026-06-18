import { prisma } from "@/lib/prisma";
import GalleryClient from "./GalleryClient";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AdminGallery() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/admin/login");
  }
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" }
  });

  return <GalleryClient initialProjects={projects} />;
}

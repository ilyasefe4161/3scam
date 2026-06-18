import { prisma } from "@/lib/prisma";
import BlogClient from "./BlogClient";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AdminBlog() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/admin/login");
  }
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" }
  });

  return <BlogClient initialPosts={posts} />;
}

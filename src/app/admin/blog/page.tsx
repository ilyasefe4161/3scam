import { prisma } from "@/lib/prisma";
import BlogClient from "./BlogClient";

export default async function AdminBlog() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" }
  });

  return <BlogClient initialPosts={posts} />;
}

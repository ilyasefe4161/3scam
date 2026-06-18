import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/admin/login");
  }

  const [messageCount, projectCount, serviceCount, postCount] = await Promise.all([
    prisma.message.count(),
    prisma.project.count(),
    prisma.service.count(),
    prisma.post.count()
  ]);

  return (
    <div>
       <h1 style={{ fontSize: "2rem", marginBottom: "2rem", color: "var(--color-secondary)" }}>
         Hoşgeldiniz, {session.user?.name}
       </h1>
       <div className="grid md:grid-cols-4">
          <div className="card text-center" style={{ padding: "2rem" }}>
             <h2 style={{ fontSize: "3rem", color: "var(--color-primary)", margin: "0" }}>{messageCount}</h2>
             <p style={{ color: "var(--color-text-muted)", marginTop: "0.5rem" }}>Gelen Mesajlar</p>
          </div>
          <div className="card text-center" style={{ padding: "2rem" }}>
             <h2 style={{ fontSize: "3rem", color: "var(--color-primary)", margin: "0" }}>{projectCount}</h2>
             <p style={{ color: "var(--color-text-muted)", marginTop: "0.5rem" }}>Projeler (Galeri)</p>
          </div>
          <div className="card text-center" style={{ padding: "2rem" }}>
             <h2 style={{ fontSize: "3rem", color: "var(--color-primary)", margin: "0" }}>{serviceCount}</h2>
             <p style={{ color: "var(--color-text-muted)", marginTop: "0.5rem" }}>Hizmetler</p>
          </div>
          <div className="card text-center" style={{ padding: "2rem" }}>
             <h2 style={{ fontSize: "3rem", color: "var(--color-primary)", margin: "0" }}>{postCount}</h2>
             <p style={{ color: "var(--color-text-muted)", marginTop: "0.5rem" }}>Blog Yazıları</p>
          </div>
       </div>
    </div>
  );
}

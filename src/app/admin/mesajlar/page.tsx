import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AdminMessages() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/admin/login");
  }
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "var(--color-secondary)" }}>İletişim Mesajları</h1>
      
      {messages.length === 0 ? (
        <p>Henüz mesaj bulunmuyor.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {messages.map(msg => (
            <div key={msg.id} className="card" style={{ borderLeft: msg.isRead ? "4px solid #94a3b8" : "4px solid var(--color-primary)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                 <h3 style={{ fontSize: "1.1rem" }}>{msg.name}</h3>
                 <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{new Date(msg.createdAt).toLocaleString("tr-TR")}</span>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "1rem" }}>
                 Email: {msg.email} | Telefon: {msg.phone || "Belirtilmedi"}
              </p>
              <div style={{ backgroundColor: "var(--color-bg)", padding: "1rem", borderRadius: "4px" }}>
                 {msg.content}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

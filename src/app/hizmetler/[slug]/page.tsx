import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const service = await prisma.service.findUnique({
    where: { slug }
  });

  if (!service) {
    notFound();
  }

  return (
    <div className="container py-20">
      <div className="mb-8">
        <Link href="/hizmetler" className="btn btn-outline" style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}>
          ← Hizmetlerimize Dön
        </Link>
      </div>

      <div className="grid md:grid-cols-2" style={{ gap: "4rem", alignItems: "start" }}>
        <div className="animate-fade-in-up">
          {service.imageUrl ? (
            <div style={{ borderRadius: "1rem", overflow: "hidden", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}>
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                style={{ width: "100%", height: "auto", display: "block" }} 
              />
            </div>
          ) : (
            <div style={{ 
              width: "100%", 
              aspectRatio: "16/9", 
              backgroundColor: "var(--color-primary)", 
              borderRadius: "1rem", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              color: "white",
              fontSize: "3rem"
            }}>
              {service.title.charAt(0)}
            </div>
          )}
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h1 style={{ fontSize: "3rem", color: "var(--color-primary)", marginBottom: "1.5rem", lineHeight: "1.1" }}>
            {service.title}
          </h1>
          <p style={{ fontSize: "1.25rem", color: "var(--color-text-main)", fontWeight: "500", marginBottom: "2rem", borderLeft: "4px solid var(--color-primary)", paddingLeft: "1.5rem" }}>
            {service.description}
          </p>
          
          <div style={{ color: "var(--color-text-main)", fontSize: "1.1rem", lineHeight: "1.8", whiteSpace: "pre-wrap" }}>
            {service.content || "Bu hizmet hakkında detaylı bilgi yakında eklenecektir."}
          </div>

          <div style={{ marginTop: "3rem", padding: "2rem", backgroundColor: "white", borderRadius: "1rem", border: "1px solid var(--color-border)" }}>
            <h3 style={{ marginBottom: "1rem" }}>Bilgi Almak İster Misiniz?</h3>
            <p style={{ marginBottom: "1.5rem", color: "var(--color-text-muted)" }}>
              {service.title} hizmetimiz hakkında daha fazla detay veya fiyat teklifi almak için bizimle iletişime geçebilirsiniz.
            </p>
            <Link href="/iletisim" className="btn btn-primary" style={{ width: "100%" }}>
              Teklif Alın
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

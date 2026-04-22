import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    orderBy: { createdAt: "asc" }
  });

  return (
    <div className="container py-20">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "var(--color-primary)" }}>Hizmetlerimiz</h1>
        <div style={{ width: "80px", height: "4px", backgroundColor: "var(--color-primary)", margin: "0 auto 1.5rem" }}></div>
        <p style={{ color: "var(--color-text-muted)", maxWidth: "700px", margin: "0 auto", fontSize: "1.2rem" }}>
          3S CAM olarak, inşaat, cam işleme ve doğrama alanlarında en yüksek kalite standartlarıyla çözüm üretiyoruz.
        </p>
      </div>

      {services.length === 0 ? (
        <div className="text-center" style={{ color: "var(--color-text-muted)" }}>
          <p>Henüz hizmet eklenmemiş.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: "2.5rem" }}>
          {services.map((service, idx) => (
            <Link 
              href={`/hizmetler/${service.slug}`}
              key={service.id} 
              className="card animate-fade-in-up" 
              style={{ 
                padding: 0, 
                overflow: "hidden", 
                animationDelay: `${idx * 0.1}s`, 
                display: "flex", 
                flexDirection: "column",
                textDecoration: "none",
                height: "100%",
                border: "1px solid transparent"
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "240px", overflow: "hidden" }}>
                {service.imageUrl ? (
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                      transition: "transform 0.5s ease"
                    }} 
                    className="service-card-img"
                  />
                ) : (
                  <div style={{ 
                    width: "100%", 
                    height: "100%", 
                    backgroundColor: "var(--color-primary)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    color: "white",
                    fontSize: "4rem"
                  }}>
                    {service.title.charAt(0)}
                  </div>
                )}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                  padding: "1rem",
                  color: "white"
                }}>
                   <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px" }}>Hizmet Detayı →</span>
                </div>
              </div>
              <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--color-secondary)" }}>{service.title}</h2>
                <p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem", fontSize: "1rem", flex: 1 }}>
                  {service.description}
                </p>
                <div style={{ color: "var(--color-primary)", fontWeight: "600", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  Detayları İncele 
                  <span style={{ transition: "transform 0.2s" }} className="arrow-icon">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .card:hover .service-card-img {
          transform: scale(1.1);
        }
        .card:hover .arrow-icon {
          transform: translateX(5px);
        }
        .card:hover {
          border-color: var(--color-primary);
        }
      `}} />
    </div>
  );
}

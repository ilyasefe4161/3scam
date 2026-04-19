import { prisma } from "@/lib/prisma";

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    orderBy: { createdAt: "asc" }
  });

  return (
    <div className="container py-20">
      <div className="text-center mb-12">
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Hizmetlerimiz</h1>
        <p style={{ color: "var(--color-text-muted)", maxWidth: "700px", margin: "0 auto" }}>
          Cam, alüminyum ve inşaat alanındaki uzmanlığımızı detaylı olarak inceleyin.
        </p>
      </div>

      {services.length === 0 ? (
        <div className="text-center" style={{ color: "var(--color-text-muted)" }}>
          <p>Henüz hizmet eklenmemiş.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2" style={{ gap: "2rem" }}>
          {services.map((service, idx) => (
            <div 
              key={service.id} 
              className="card animate-fade-in-up" 
              style={{ padding: service.imageUrl ? 0 : "1.5rem", overflow: "hidden", animationDelay: `${idx * 0.15}s`, display: "flex", flexDirection: "column" }}
            >
              {service.imageUrl && (
                <div style={{ position: "relative", width: "100%", height: "200px" }}>
                  <img src={service.imageUrl} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              )}
              <div style={{ padding: service.imageUrl ? "1.5rem" : 0, flex: 1 }}>
                <h2 style={{ fontSize: "1.75rem", marginBottom: "0.5rem", color: "var(--color-primary)" }}>{service.title}</h2>
                <p style={{ color: "var(--color-text-muted)", marginBottom: "1rem", fontSize: "1.1rem" }}>{service.description}</p>
                {service.content && (
                  <div style={{ color: "var(--color-text-main)", fontSize: "0.95rem" }}>
                    {service.content}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

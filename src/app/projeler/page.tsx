import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function GalleryPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="container py-20">
      <div className="text-center mb-12">
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Projelerimiz</h1>
        <p style={{ color: "var(--color-text-muted)", maxWidth: "700px", margin: "0 auto" }}>
          Tamamladığımız işlerden bazı kareler.
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="text-center" style={{ color: "var(--color-text-muted)" }}>
          <p>Henüz proje görseli eklenmemiş.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3">
          {projects.map(project => (
            <div key={project.id} className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ position: "relative", width: "100%", height: "250px", backgroundColor: "var(--color-border)" }}>
                {project.imageUrl ? (
                  <Image 
                    src={project.imageUrl} 
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-muted)" }}>Görsel Yok</div>
                )}
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{project.title}</h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

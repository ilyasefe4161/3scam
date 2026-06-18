import { prisma } from "@/lib/prisma";

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="container py-20">
      <div className="text-center mb-12">
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Blog</h1>
        <p style={{ color: "var(--color-text-muted)", maxWidth: "700px", margin: "0 auto" }}>
          Sektörel haberler ve firmamızdan güncel gelişmeler.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center" style={{ color: "var(--color-text-muted)" }}>
          <p>Yayınlanmış blog yazısı bulunmuyor.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2">
          {posts.map(post => (
            <div key={post.id} className="card">
              <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "var(--color-secondary)" }}>{post.title}</h2>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", marginBottom: "1rem" }}>
                {new Date(post.createdAt).toLocaleDateString('tr-TR')}
              </p>
              <div style={{ color: "var(--color-text-main)" }}>
                {post.content.substring(0, 150)}...
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

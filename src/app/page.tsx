import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "var(--color-bg-dark)",
        color: "var(--color-white)",
        overflow: "hidden"
      }}>
        {/* Placeholder for background image */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, width: "100%", height: "100%",
          background: "linear-gradient(to right, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.5))",
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "700px" }} className="animate-fade-in-up">
            <h1 style={{ fontSize: "3.5rem", marginBottom: "1.5rem", color: "var(--color-white)", lineHeight: 1.1 }}>
              İnşaat, Cam İşleme ve Doğramada <span style={{ color: "var(--color-primary)" }}>Mükemmellik</span>
            </h1>
            <p style={{ fontSize: "1.25rem", marginBottom: "2rem", color: "var(--color-border)", opacity: 0.9 }}>
              Yılların tecrübesiyle estetik ve dayanıklılığı bir araya getiriyoruz. Projelerinize özel yenilikçi çözümleri 3S CAM farkıyla sizlere sunuyoruz.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/projeler" className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>Projelerimizi İnceleyin</Link>
              <Link href="/iletisim" className="btn btn-outline" style={{ padding: "1rem 2rem", fontSize: "1.1rem", borderColor: "var(--color-white)", color: "var(--color-white)" }}>İletişime Geçin</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Hizmetlerimiz</h2>
            <p style={{ color: "var(--color-text-muted)", maxWidth: "600px", margin: "0 auto" }}>
              İhtiyacınıza uygun kalıcı ve estetik çözümler üretiyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3">
            {[
              { title: "Cam İşleme", desc: "Temperli, ısıcam, lamine, jaluzili ve dekoratif cam çözümleriyle mekanlarınıza değer katıyoruz." },
              { title: "Alüminyum & PVC Doğrama", desc: "Isı yalıtımlı, dayanıklı ve şık tasarımlı doğrama sistemleriyle konforu garantiliyoruz." },
              { title: "İnşaat İşleri", desc: "Temelden çatıya, tüm mimari ve yapısal gereksinimlerinizi anahtar teslim yönetiyoruz." },
            ].map((service, idx) => (
              <div key={idx} className="card text-center" style={{ padding: "2rem" }}>
                <div style={{
                  width: "60px", height: "60px", margin: "0 auto 1.5rem",
                  backgroundColor: "rgba(142, 28, 42, 0.1)", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--color-primary)", fontWeight: "bold", fontSize: "1.5rem"
                }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{service.title}</h3>
                <p style={{ color: "var(--color-text-muted)" }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-12" style={{ backgroundColor: "var(--color-secondary)", color: "var(--color-white)" }}>
        <div className="container text-center">
          <h2 style={{ color: "var(--color-white)", marginBottom: "1rem" }}>Projeniz için Fiyat Teklifi Alın</h2>
          <p style={{ marginBottom: "2rem", opacity: 0.9 }}>Uzman ekibimizle en kısa sürede dönüş sağlayalım.</p>
          <Link href="/iletisim" className="btn btn-primary" style={{ padding: "1rem 2rem" }}>Hemen İletişime Geçin</Link>
        </div>
      </section>
    </div>
  );
}

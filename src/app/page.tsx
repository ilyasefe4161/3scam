import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: "relative",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "var(--color-bg-dark)",
        color: "var(--color-white)",
        overflow: "hidden"
      }}>
        {/* Advanced Background with Gradient Orbs */}
        <div style={{
          position: "absolute",
          top: "-20%", left: "-10%", width: "50%", height: "70%",
          background: "radial-gradient(circle, rgba(197,160,89,0.15) 0%, rgba(2,6,23,0) 70%)",
          zIndex: 1, filter: "blur(40px)"
        }}></div>
        <div style={{
          position: "absolute",
          bottom: "-20%", right: "-10%", width: "60%", height: "80%",
          background: "radial-gradient(circle, rgba(245,158,11,0.1) 0%, rgba(2,6,23,0) 70%)",
          zIndex: 1, filter: "blur(60px)"
        }}></div>
        
        <div style={{
          position: "absolute",
          top: 0, left: 0, width: "100%", height: "100%",
          background: "linear-gradient(135deg, rgba(2,6,23,0.95) 0%, rgba(15,23,42,0.8) 100%)",
          zIndex: 2
        }}></div>

        <div className="container" style={{ position: "relative", zIndex: 3 }}>
          <div style={{ maxWidth: "800px" }} className="animate-fade-in-up">
            <div style={{ display: "inline-block", padding: "0.5rem 1rem", backgroundColor: "rgba(197, 160, 89, 0.1)", border: "1px solid rgba(197, 160, 89, 0.2)", borderRadius: "999px", marginBottom: "1.5rem", color: "var(--color-primary-light)", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Kocaeli & İzmit Bölgesi
            </div>
            <h1 style={{ fontSize: "4rem", marginBottom: "1.5rem", color: "var(--color-white)", lineHeight: 1.1, letterSpacing: "-1px" }}>
              Cam, İnşaat ve Doğramada <br /> <span className="text-gradient">Premium Çözümler</span>
            </h1>
            <p style={{ fontSize: "1.25rem", marginBottom: "2.5rem", color: "var(--color-border)", opacity: 0.85, maxWidth: "600px", lineHeight: 1.8 }}>
              Modern mimari, yüksek güvenlik ve estetiği bir araya getiriyoruz. Projelerinize özel yenilikçi çözümlerle mekanlarınıza değer katıyoruz.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/projeler" className="btn btn-primary" style={{ padding: "1.25rem 2.5rem", fontSize: "1rem" }}>Projelerimizi İnceleyin</Link>
              <Link href="/iletisim" className="btn btn-outline" style={{ padding: "1.25rem 2.5rem", fontSize: "1rem", borderColor: "rgba(255,255,255,0.3)", color: "var(--color-white)" }}>İletişime Geçin</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20" style={{ backgroundColor: "var(--color-bg)", position: "relative" }}>
        <div className="container">
          <div className="text-center mb-8 animate-fade-in-up-delay-1">
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "var(--color-secondary)" }}>Uzmanlık Alanlarımız</h2>
            <p style={{ color: "var(--color-text-muted)", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
              İhtiyacınıza uygun, uzun ömürlü ve şık mimari çözümler üretiyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3">
            {[
              { title: "Cam İşleme", desc: "Temperli, ısıcam, lamine, jaluzili ve dekoratif cam çözümleriyle mekanlarınıza değer katıyoruz.", icon: "💎" },
              { title: "Alüminyum & PVC Doğrama", desc: "Isı yalıtımlı, dayanıklı ve estetik tasarımlı doğrama sistemleriyle maksimum konforu garantiliyoruz.", icon: "🏗️" },
              { title: "İnşaat Projeleri", desc: "Temelden çatıya, tüm mimari ve yapısal gereksinimlerinizi anahtar teslim bir şekilde yönetiyoruz.", icon: "🏢" },
            ].map((service, idx) => (
              <div key={idx} className={`glass-card text-center animate-fade-in-up-delay-${(idx % 2) + 1}`}>
                <div style={{
                  width: "70px", height: "70px", margin: "0 auto 1.5rem",
                  background: "linear-gradient(135deg, rgba(197,160,89,0.1), rgba(197,160,89,0.05))",
                  borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2rem", border: "1px solid rgba(197,160,89,0.2)"
                }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--color-secondary)" }}>{service.title}</h3>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-20" style={{ 
        background: "linear-gradient(135deg, var(--color-secondary), var(--color-bg-dark))", 
        color: "var(--color-white)",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Decorative element */}
        <div style={{
          position: "absolute", top: "50%", right: "10%", transform: "translateY(-50%)",
          width: "300px", height: "300px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14,165,233,0.2) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(20px)"
        }}></div>

        <div className="container text-center" style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{ color: "var(--color-white)", fontSize: "2.5rem", marginBottom: "1.5rem" }}>Projeniz için Özel Fiyat Teklifi Alın</h2>
          <p style={{ marginBottom: "2.5rem", fontSize: "1.1rem", opacity: 0.85, maxWidth: "600px", margin: "0 auto 2.5rem auto" }}>
            Uzman ekibimizle iletişime geçin, projenizi detaylandıralım ve size en uygun çözümü en kısa sürede sunalım.
          </p>
          <Link href="/iletisim" className="btn btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.1rem", boxShadow: "0 0 0 0 rgba(14, 165, 233, 0.4)", animation: "pulse-glow 2s infinite" }}>
            Hemen İletişime Geçin
          </Link>
        </div>
      </section>
    </div>
  );
}

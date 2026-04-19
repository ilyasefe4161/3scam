import React from "react";

export default function AboutPage() {
  return (
    <div className="container py-20">
      <div className="text-center mb-12">
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Hakkımızda</h1>
        <p style={{ color: "var(--color-text-muted)", maxWidth: "700px", margin: "0 auto" }}>
          3S CAM olarak uzun yıllardır cam işleme, alüminyum ve PVC doğrama ile inşaat projelerinde sektörün öncü firmalarından biri olmanın gururunu yaşıyoruz.
        </p>
      </div>

      <div className="grid md:grid-cols-2" style={{ gap: "4rem", alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Vizyonumuz ve Misyonumuz</h2>
          <p style={{ marginBottom: "1rem", color: "var(--color-text-main)" }}>
            Müşterilerimize her zaman en kaliteli malzemeyi, en kusursuz işçilikle sunmayı hedefliyoruz. Gelişen teknolojileri yakından takip ediyor, estetik ve dayanıklılığın buluştuğu projelere imza atıyoruz.
          </p>
          <p style={{ color: "var(--color-text-main)" }}>
            İster ticari bir bina, ister özel bir yapı olsun, müşterilerimizin taleplerini eksiksiz anlamak ve hayallerindeki tasarımları gerçeğe dönüştürmek en büyük önceliğimizdir.
          </p>
        </div>
        <div style={{ backgroundColor: "var(--color-border)", borderRadius: "8px", height: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
           <span style={{ color: "var(--color-text-muted)" }}>[Atölye/Ofis Görseli Alanı]</span>
        </div>
      </div>
    </div>
  );
}

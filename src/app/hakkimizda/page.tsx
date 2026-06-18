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

      <div className="card" style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "var(--color-primary-dark)", textAlign: "center" }}>Vizyonumuz ve Misyonumuz</h2>
        <div style={{ width: "60px", height: "3px", backgroundColor: "var(--color-primary)", margin: "0 auto 2rem" }}></div>
        <p style={{ marginBottom: "1.5rem", color: "var(--color-text-main)", fontSize: "1.1rem", lineHeight: 1.8, textAlign: "center" }}>
          Müşterilerimize her zaman en kaliteli malzemeyi, en kusursuz işçilikle sunmayı hedefliyoruz. Gelişen teknolojileri yakından takip ediyor, estetik ve dayanıklılığın buluştuğu projelere imza atıyoruz.
        </p>
        <p style={{ color: "var(--color-text-main)", fontSize: "1.1rem", lineHeight: 1.8, textAlign: "center" }}>
          İster ticari bir bina, ister özel bir yapı olsun, müşterilerimizin taleplerini eksiksiz anlamak ve hayallerindeki tasarımları gerçeğe dönüştürmek en büyük önceliğimizdir. 3S Cam olarak, her projede güven inşa ediyoruz.
        </p>
      </div>
    </div>
  );
}

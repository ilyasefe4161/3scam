"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return (
    <footer style={{ backgroundColor: "var(--color-bg-dark)", color: "var(--color-white)", padding: "3rem 0", marginTop: "4rem" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
          <div>
            <h3 style={{ color: "var(--color-white)", marginBottom: "1rem" }}>3S CAM</h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
              Cam işleme, doğrama ve inşaat sektöründe yenilikçi yaklaşımlar ve kusursuz işçilik sunuyoruz.
            </p>
          </div>
          <div>
            <h4 style={{ color: "var(--color-white)", marginBottom: "1rem" }}>Hizmetlerimiz</h4>
            <ul style={{ listStyle: "none", color: "var(--color-text-muted)", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><a href="/hizmetler/cam-isleme">Cam İşleme</a></li>
              <li><a href="/hizmetler/aluminyum-pvc-dograma">Alüminyum & PVC Doğrama</a></li>
              <li><a href="/hizmetler/insaat-projeleri">İnşaat Projeleri</a></li>
              <li><a href="/hizmetler/mimari-cozumler">Mimari Çözümler</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "var(--color-white)", marginBottom: "1rem" }}>İletişim</h4>
            <ul style={{ listStyle: "none", color: "var(--color-text-muted)", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>Email: info@3scam.com.tr</li>
              <li>Telefon: +90 262 325 22 17</li>
              <li>Adres: Rahmiye Mahallesi, İzmit Cad. No: 14 Kartepe / Kocaeli</li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "2rem", paddingTop: "1.5rem", textAlign: "center", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          &copy; {new Date().getFullYear()} 3S CAM Tüm Hakları Saklıdır. <br />
          <a href="https://sartechyazilim.com" style={{ color: "var(--color-text-muted)", textDecoration: "none", fontWeight: "bold" }}>Sartech Yazılım</a> Tarafından Geliştirilmiştir.
          <br />
          <a href="/kvkk" style={{ color: "var(--color-text-muted)", textDecoration: "none", fontWeight: "bold" }}>KVKK Aydınlatma Metni</a> |
          <a href="/gizlilik-politikasi" style={{ color: "var(--color-text-muted)", textDecoration: "none", fontWeight: "bold" }}>Gizlilik Politikası</a> |
          <a href="/verisy-saklama" style={{ color: "var(--color-text-muted)", textDecoration: "none", fontWeight: "bold" }}>Veri Saklama ve İmha Politikası</a>
        </div>
      </div>
    </footer>
  );
}

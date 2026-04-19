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
              <li>Cam İşleme</li>
              <li>Alüminyum & PVC Doğrama</li>
              <li>İnşaat Projeleri</li>
              <li>Mimari Çözümler</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "var(--color-white)", marginBottom: "1rem" }}>İletişim</h4>
            <ul style={{ listStyle: "none", color: "var(--color-text-muted)", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>Email: info@3scam.com.tr</li>
              <li>Telefon: +90 555 123 4567</li>
              <li>Adres: Organize Sanayi Bölgesi, Merkez / Türkiye</li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "2rem", paddingTop: "1.5rem", textAlign: "center", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          &copy; {new Date().getFullYear()} 3S CAM Tüm Hakları Saklıdır.
        </div>
      </div>
    </footer>
  );
}

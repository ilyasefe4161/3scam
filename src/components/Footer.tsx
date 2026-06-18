"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return (
    <footer style={{ backgroundColor: "var(--color-bg-dark)", color: "var(--color-white)", padding: "4rem 0", marginTop: "auto", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "3rem" }}>
          <div>
            <h3 style={{ color: "var(--color-primary-light)", marginBottom: "1.5rem", fontSize: "1.25rem" }}>3S Cam İnş. San. ve Tic. Ltd. Şti</h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Cam işleme, doğrama ve inşaat sektöründe yenilikçi yaklaşımlar, premium kalite ve kusursuz işçilik sunuyoruz.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              {/* Instagram External Link for SEO */}
              <a href="https://www.instagram.com/3s_cam/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-white)", opacity: 0.8, transition: "opacity 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.opacity = "1"} onMouseLeave={(e) => e.currentTarget.style.opacity = "0.8"}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>Instagram'da Bizi Takip Edin</span>
              </a>
            </div>
          </div>
          <div>
            <h4 style={{ color: "var(--color-white)", marginBottom: "1.5rem", fontSize: "1.1rem" }}>Hızlı Bağlantılar</h4>
            <ul style={{ listStyle: "none", color: "var(--color-text-muted)", fontSize: "0.95rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li><Link href="/" style={{ transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary-light)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-text-muted)"}>Ana Sayfa</Link></li>
              <li><Link href="/hakkimizda" style={{ transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary-light)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-text-muted)"}>Hakkımızda</Link></li>
              <li><Link href="/hizmetler" style={{ transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary-light)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-text-muted)"}>Hizmetlerimiz</Link></li>
              <li><Link href="/projeler" style={{ transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary-light)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-text-muted)"}>Projeler</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "var(--color-white)", marginBottom: "1.5rem", fontSize: "1.1rem" }}>İletişim Bilgileri</h4>
            <ul style={{ listStyle: "none", color: "var(--color-text-muted)", fontSize: "0.95rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: "var(--color-primary)", marginTop: "2px" }}>📧</span>
                <span>info@3scam.com.tr</span>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: "var(--color-primary)", marginTop: "2px" }}>📞</span>
                <span>+90 262 325 22 17</span>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: "var(--color-primary)", marginTop: "2px" }}>📍</span>
                <span>Rahmiye Mahallesi, İzmit Cad. No: 14<br />Kartepe / Kocaeli</span>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: "3rem", paddingTop: "2rem", textAlign: "center", fontSize: "0.85rem", color: "var(--color-text-muted)", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
          <div>
            &copy; {new Date().getFullYear()} 3S Cam İnş. San. ve Tic. Ltd. Şti. Tüm Hakları Saklıdır. <br />
            <a href="https://sartechyazilim.com.tr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary-light)", textDecoration: "none", fontWeight: "bold" }}>Sartech Yazılım</a> Tarafından Geliştirilmiştir.
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/kvkk" style={{ color: "var(--color-text-muted)", textDecoration: "none", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-white)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-text-muted)"}>KVKK Aydınlatma Metni</Link> |
            <Link href="/gizlilik-politikasi" style={{ color: "var(--color-text-muted)", textDecoration: "none", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-white)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-text-muted)"}>Gizlilik Politikası</Link> |
            <Link href="/verisy-saklama" style={{ color: "var(--color-text-muted)", textDecoration: "none", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-white)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-text-muted)"}>Veri Saklama ve İmha Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (pathname?.startsWith("/admin")) return null;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logoContainer} style={{ textDecoration: 'none' }}>
          <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--color-primary)", letterSpacing: "-0.5px" }}>
            3S Cam İnş. San. ve Tic. Ltd. Şti
          </span>
        </Link>
        <nav className={styles.navLinks}>
          <Link href="/" className={styles.link}>Ana Sayfa</Link>
          <Link href="/hakkimizda" className={styles.link}>Hakkımızda</Link>
          <Link href="/hizmetler" className={styles.link}>Hizmetler</Link>
          <Link href="/projeler" className={styles.link}>Projeler</Link>
          {/* <Link href="/blog" className={styles.link}>Blog</Link> */}
          <Link href="/iletisim" className={styles.link}>İletişim</Link>
        </nav>
        <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu} aria-label="Menüyü Aç">
          <svg viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className={styles.mobileNav}>
          <Link href="/" className={styles.link} onClick={closeMenu}>Ana Sayfa</Link>
          <Link href="/hakkimizda" className={styles.link} onClick={closeMenu}>Hakkımızda</Link>
          <Link href="/hizmetler" className={styles.link} onClick={closeMenu}>Hizmetler</Link>
          <Link href="/projeler" className={styles.link} onClick={closeMenu}>Projeler</Link>
          <Link href="/blog" className={styles.link} onClick={closeMenu}>Blog</Link>
          <Link href="/iletisim" className={styles.link} onClick={closeMenu}>İletişim</Link>
          <Link href="/admin/login" className={`btn btn-outline`} style={{ textAlign: "center" }} onClick={closeMenu}>Yönetici Girişi</Link>
        </nav>
      )}
    </header>
  );
}

import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AuthProvider from "@/components/AuthProvider";
import Link from "next/link";
import { headers } from "next/headers";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  
  // Actually headers().get("x-invoke-path") isn't fully reliable in app router.
  // We can just rely on the layout wrapping logic. But since layout wraps /admin/login too,
  // we can't redirect directly here if the user is ON the login page.
  // Wait! A better way is: if!session, then render children (login page handles itself or redirects).
  // But wait, if they go to /admin/projeler without session, they shouldn't see it.
  
  return (
    <AuthProvider>
      <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "var(--color-bg)" }}>
        {session && (
          <aside style={{ width: "250px", backgroundColor: "var(--color-bg-dark)", color: "var(--color-white)", padding: "1.5rem" }}>
            <h2 style={{ color: "var(--color-white)", marginBottom: "2rem", fontSize: "1.5rem" }}>Yönetim Paneli</h2>
            <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
               <Link href="/admin" style={{ opacity: 0.8 }}>Özet (Dashboard)</Link>
               <Link href="/admin/projeler" style={{ opacity: 0.8 }}>Projeler</Link>
               <Link href="/admin/hizmetler" style={{ opacity: 0.8 }}>Hizmetler</Link>
               <Link href="/admin/blog" style={{ opacity: 0.8 }}>Blog</Link>
               <Link href="/admin/mesajlar" style={{ opacity: 0.8 }}>Gelen Mesajlar</Link>
               <Link href="/" style={{ opacity: 0.8, marginTop: "2rem" }}>Siteye Dön</Link>
            </nav>
          </aside>
        )}
        <main style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
          {children}
        </main>
      </div>
    </AuthProvider>
  );
}

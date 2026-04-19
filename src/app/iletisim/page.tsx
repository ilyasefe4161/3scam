"use client";

import { useState } from "react";
import { submitContactMessage } from "./actions";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const result = await submitContactMessage(formData);

    if (result.error) {
       setStatus("error");
       setMessage(result.error);
    } else {
       setStatus("success");
       setMessage("Mesajınız başarıyla iletildi. En kısa sürede dönüş yapacağız.");
       (e.target as HTMLFormElement).reset();
    }
  }

  return (
    <div className="container py-20">
      <div className="text-center mb-12">
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>İletişim</h1>
        <p style={{ color: "var(--color-text-muted)", maxWidth: "700px", margin: "0 auto" }}>
          Sorularınız veya fiyat teklifi almak için formu kullanabilirsiniz.
        </p>
      </div>

      <div className="grid md:grid-cols-2" style={{ gap: "4rem" }}>
        <div>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--color-secondary)" }}>Bize Ulaşın</h2>
          <div className="card">
            <p style={{ marginBottom: "1rem" }}><strong>📍 Adres:</strong> Organize Sanayi Bölgesi, Merkez / Türkiye</p>
            <p style={{ marginBottom: "1rem" }}><strong>📞 Telefon:</strong> +90 555 123 4567</p>
            <p style={{ marginBottom: "1rem" }}><strong>✉️ E-posta:</strong> info@3scam.com.tr</p>
            
            <div style={{ marginTop: "2rem", height: "300px", backgroundColor: "var(--color-border)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
               <span style={{ color: "var(--color-text-muted)" }}>[Harita Embed Alanı]</span>
            </div>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--color-secondary)" }}>Mesaj Gönderin</h2>
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label className="input-label" htmlFor="name">Ad Soyad *</label>
                <input type="text" id="name" name="name" className="input-field" required />
              </div>
              <div className="input-group">
                <label className="input-label" htmlFor="email">E-posta *</label>
                <input type="email" id="email" name="email" className="input-field" required />
              </div>
              <div className="input-group">
                <label className="input-label" htmlFor="phone">Telefon</label>
                <input type="tel" id="phone" name="phone" className="input-field" />
              </div>
              <div className="input-group">
                <label className="input-label" htmlFor="content">Mesajınız *</label>
                <textarea id="content" name="content" className="input-field" rows={5} required></textarea>
              </div>

              {message && (
                <div style={{ 
                  padding: "1rem", marginBottom: "1rem", borderRadius: "4px",
                  backgroundColor: status === "success" ? "#d1fae5" : "#fee2e2",
                  color: status === "success" ? "#065f46" : "#b91c1c"
                }}>
                  {message}
                </div>
              )}

              <button type="submit" className="btn btn-primary" style={{ width: "100%" }} disabled={status === "loading"}>
                {status === "loading" ? "Gönderiliyor..." : "Mesajı Gönder"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

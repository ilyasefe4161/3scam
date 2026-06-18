"use client";

import { useState } from "react";
import { addService, deleteService, editService } from "./actions";

export default function ServicesClient({ initialServices }: { initialServices: any[] }) {
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    await addService(formData);
    setLoading(false);
    (e.target as HTMLFormElement).reset();
  }

  async function handleEdit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    await editService(formData);
    setLoading(false);
    setEditingId(null);
  }

  async function handleDelete(id: string) {
    if (!confirm("Bu hizmeti silmek istediğinizden emin misiniz?")) return;
    setLoading(true);
    await deleteService(id);
    setLoading(false);
  }

  return (
    <div>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "var(--color-secondary)" }}>Hizmet Yönetimi</h1>
      
      <div className="card" style={{ marginBottom: "2rem" }}>
         <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Yeni Hizmet Ekle</h2>
         <form onSubmit={handleAdd}>
            <div className="input-group">
               <label className="input-label">Hizmet Adı *</label>
               <input type="text" name="title" className="input-field" required />
            </div>
            <div className="input-group">
               <label className="input-label">Kısa Açıklama *</label>
               <input type="text" name="description" className="input-field" required />
            </div>
            <div className="input-group">
               <label className="input-label">Hizmet Görseli Ekleyin (İsteğe Bağlı)</label>
               <input type="file" name="image" accept="image/*" className="input-field" style={{ padding: "0.5rem" }} />
            </div>
            <div className="input-group">
               <label className="input-label">Detaylı İçerik</label>
               <textarea name="content" className="input-field" rows={4}></textarea>
            </div>
            <button className="btn btn-primary" type="submit" disabled={loading}>
               {loading ? "İşlem Yapılıyor..." : "Ekle"}
            </button>
         </form>
      </div>

      <div style={{ display: "grid", gap: "1rem" }}>
        {initialServices.map(svc => (
          <div key={svc.id} className="card">
            {editingId === svc.id ? (
              <form onSubmit={handleEdit}>
                <input type="hidden" name="id" value={svc.id} />
                <div className="input-group">
                   <label className="input-label">Hizmet Adı *</label>
                   <input type="text" name="title" defaultValue={svc.title} className="input-field" required />
                </div>
                <div className="input-group">
                   <label className="input-label">Kısa Açıklama *</label>
                   <input type="text" name="description" defaultValue={svc.description} className="input-field" required />
                </div>
                <div className="input-group">
                   <label className="input-label">Hizmet Görselini Değiştir</label>
                   <input type="file" name="image" accept="image/*" className="input-field" style={{ padding: "0.5rem" }} />
                   {svc.imageUrl && <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>Mevcut: {svc.imageUrl}</span>}
                </div>
                <div className="input-group">
                   <label className="input-label">Detaylı İçerik</label>
                   <textarea name="content" defaultValue={svc.content || ""} className="input-field" rows={4}></textarea>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button className="btn btn-primary" type="submit" disabled={loading}>Kaydet</button>
                  <button className="btn btn-outline" type="button" onClick={() => setEditingId(null)}>İptal</button>
                </div>
              </form>
            ) : (
              <div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  {svc.imageUrl && (
                    <img src={svc.imageUrl} alt={svc.title} style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }} />
                  )}
                  <div>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{svc.title}</h3>
                    <p style={{ color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>{svc.description}</p>
                    <div style={{ fontSize: "0.9rem", color: "var(--color-text-main)", marginBottom: "1rem" }}>
                       {svc.content && svc.content.substring(0, 100) + "..."}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
                  <button className="btn btn-outline" onClick={() => setEditingId(svc.id)}>Düzenle</button>
                  <button className="btn btn-secondary" onClick={() => handleDelete(svc.id)} style={{ backgroundColor: "#b91c1c" }}>Sil</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

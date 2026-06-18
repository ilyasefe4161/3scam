"use client";

import { useState } from "react";
import { addProject, deleteProject, editProject } from "./actions";

export default function GalleryClient({ initialProjects }: { initialProjects: any[] }) {
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    await addProject(formData);
    setLoading(false);
    (e.target as HTMLFormElement).reset();
  }

  async function handleEdit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    await editProject(formData);
    setLoading(false);
    setEditingId(null);
  }

  async function handleDelete(id: string) {
    if (!confirm("Bu projeyi silmek istediğinize emin misiniz?")) return;
    setLoading(true);
    await deleteProject(id);
    setLoading(false);
  }

  return (
    <div>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "var(--color-secondary)" }}>Proje Yönetimi</h1>
      
      <div className="card" style={{ marginBottom: "2rem" }}>
         <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Yeni Proje Ekle</h2>
         <form onSubmit={handleAdd}>
            <div className="input-group">
               <label className="input-label">Proje Adı *</label>
               <input type="text" name="title" className="input-field" required />
            </div>
            <div className="input-group">
               <label className="input-label">Açıklama *</label>
               <input type="text" name="description" className="input-field" required />
            </div>
            <div className="input-group">
               <label className="input-label">Proje Görseli Yükle</label>
               <input type="file" name="image" accept="image/*" className="input-field" style={{ padding: "0.5rem" }} />
            </div>
            <button className="btn btn-primary" type="submit" disabled={loading}>
               {loading ? "İşlem Yapılıyor..." : "Ekle"}
            </button>
         </form>
      </div>

      <div style={{ display: "grid", gap: "1rem" }}>
        {initialProjects.map(project => (
          <div key={project.id} className="card">
            {editingId === project.id ? (
              <form onSubmit={handleEdit}>
                <input type="hidden" name="id" value={project.id} />
                <div className="input-group">
                   <label className="input-label">Proje Adı *</label>
                   <input type="text" name="title" defaultValue={project.title} className="input-field" required />
                </div>
                <div className="input-group">
                   <label className="input-label">Açıklama *</label>
                   <input type="text" name="description" defaultValue={project.description} className="input-field" required />
                </div>
                <div className="input-group">
                   <label className="input-label">Yeni Görsel Yükle (Mevcut Görseli Değiştirmek İçin)</label>
                   <input type="file" name="image" accept="image/*" className="input-field" style={{ padding: "0.5rem" }} />
                   {project.imageUrl && <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>Mevcut Görsel: {project.imageUrl}</span>}
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button className="btn btn-primary" type="submit" disabled={loading}>Kaydet</button>
                  <button className="btn btn-outline" type="button" onClick={() => setEditingId(null)}>İptal</button>
                </div>
              </form>
            ) : (
              <div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{project.title}</h3>
                <p style={{ color: "var(--color-text-muted)", marginBottom: "1rem" }}>{project.description}</p>
                {project.imageUrl ? (
                  <div style={{ marginBottom: "1rem" }}>
                    <img src={project.imageUrl} alt={project.title} style={{ height: "100px", borderRadius: "4px", objectFit: "cover" }} />
                  </div>
                ) : (
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "1rem" }}>Görsel Yok</p>
                )}
                
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button className="btn btn-outline" onClick={() => setEditingId(project.id)}>Düzenle</button>
                  <button className="btn btn-secondary" onClick={() => handleDelete(project.id)} style={{ backgroundColor: "#b91c1c" }}>Sil</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

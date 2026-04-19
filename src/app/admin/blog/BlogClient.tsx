"use client";

import { useState } from "react";
import { addPost, deletePost, editPost } from "./actions";

export default function BlogClient({ initialPosts }: { initialPosts: any[] }) {
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    await addPost(formData);
    setLoading(false);
    (e.target as HTMLFormElement).reset();
  }

  async function handleEdit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    await editPost(formData);
    setLoading(false);
    setEditingId(null);
  }

  async function handleDelete(id: string) {
    if (!confirm("Bu yazıyı silmek istediğinizden emin misiniz?")) return;
    setLoading(true);
    await deletePost(id);
    setLoading(false);
  }

  return (
    <div>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "var(--color-secondary)" }}>Blog Yönetimi</h1>
      
      <div className="card" style={{ marginBottom: "2rem" }}>
         <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Yeni Yazı Ekle</h2>
         <form onSubmit={handleAdd}>
            <div className="input-group">
               <label className="input-label">Başlık *</label>
               <input type="text" name="title" className="input-field" required />
            </div>
            <div className="input-group">
               <label className="input-label">İçerik *</label>
               <textarea name="content" className="input-field" rows={5} required></textarea>
            </div>
            <div className="input-group" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
               <input type="checkbox" name="published" value="true" id="published" defaultChecked />
               <label htmlFor="published" style={{ fontWeight: 500 }}>Yayında (Sitede görünsün)</label>
            </div>
            <button className="btn btn-primary" type="submit" disabled={loading}>
               {loading ? "Ekleniyor..." : "Ekle"}
            </button>
         </form>
      </div>

      <div style={{ display: "grid", gap: "1rem" }}>
        {initialPosts.map(post => (
          <div key={post.id} className="card" style={{ opacity: post.published ? 1 : 0.6 }}>
            {editingId === post.id ? (
              <form onSubmit={handleEdit}>
                <input type="hidden" name="id" value={post.id} />
                <div className="input-group">
                   <label className="input-label">Başlık *</label>
                   <input type="text" name="title" defaultValue={post.title} className="input-field" required />
                </div>
                <div className="input-group">
                   <label className="input-label">İçerik *</label>
                   <textarea name="content" defaultValue={post.content} className="input-field" rows={5} required></textarea>
                </div>
                <div className="input-group" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                   <input type="checkbox" name="published" value="true" id={`edit_pub_${post.id}`} defaultChecked={post.published} />
                   <label htmlFor={`edit_pub_${post.id}`} style={{ fontWeight: 500 }}>Yayında</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button className="btn btn-primary" type="submit" disabled={loading}>Kaydet</button>
                  <button className="btn btn-outline" type="button" onClick={() => setEditingId(null)}>İptal</button>
                </div>
              </form>
            ) : (
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                   <h3 style={{ fontSize: "1.25rem" }}>{post.title}</h3>
                   <span style={{ fontSize: "0.8rem", padding: "0.25rem 0.5rem", borderRadius: "12px", backgroundColor: post.published ? "#d1fae5" : "#fee2e2", color: post.published ? "#065f46" : "#b91c1c" }}>
                     {post.published ? "Yayında" : "Taslak"}
                   </span>
                </div>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", marginBottom: "1rem" }}>{new Date(post.createdAt).toLocaleDateString("tr-TR")} • /{post.slug}</p>
                <div style={{ fontSize: "0.95rem", color: "var(--color-text-main)", marginBottom: "1rem" }}>
                   {post.content.substring(0, 150)}{post.content.length > 150 ? "..." : ""}
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button className="btn btn-outline" onClick={() => setEditingId(post.id)}>Düzenle</button>
                  <button className="btn btn-secondary" onClick={() => handleDelete(post.id)} style={{ backgroundColor: "#b91c1c" }}>Sil</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

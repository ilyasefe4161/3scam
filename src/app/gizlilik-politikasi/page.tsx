export default function GizlilikPolitikasiPage() {
  return (
    <div className="container py-20">
      <h1 className="text-center mb-8" style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Gizlilik Politikası</h1>
      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p className="mb-6">3S CAM olarak web sitemizi ziyaret eden kullanıcıların kişisel bilgilerinin gizliliğine saygı duyuyoruz. Bu Gizlilik Politikası, sitemizi ziyaretiniz sırasında toplanan bilgilerin nasıl kullanıldığını açıklar.</p>
        
        <h3 className="mb-4">Toplanan Bilgiler</h3>
        <p className="mb-6">Web sitemiz üzerinden iletişim formu doldurmanız durumunda, adınız, e-posta adresiniz ve telefon numaranız gibi temel iletişim bilgilerinizi bizimle paylaşmış olursunuz.</p>

        <h3 className="mb-4">Çerezler (Cookies)</h3>
        <p className="mb-6">Site kullanım deneyiminizi iyileştirmek için temel düzeyde çerezler kullanılmaktadır. Bu çerezler kişisel kimlik tespiti yapmaz, sadece site performansını ölçümlemek içindir.</p>
      </div>
    </div>
  );
}

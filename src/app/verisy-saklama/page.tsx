export default function VeriSaklamaPage() {
  return (
    <div className="container py-20">
      <h1 className="text-center mb-8" style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Veri Saklama ve İmha Politikası</h1>
      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p className="mb-6">3S CAM olarak, KVKK kapsamında işlediğimiz kişisel verilerin yasal saklama süreleri ve imha süreçlerini bu politika ile belirlemekteyiz.</p>
        
        <h3 className="mb-4">Saklama Süreleri</h3>
        <p className="mb-6">Kanunlarda öngörülen veya işlendikleri amaç için gerekli olan süre kadar muhafaza edilen kişisel veriler, süre bitiminde derhal imha edilir.</p>

        <h3 className="mb-4">İmha Yöntemleri</h3>
        <p className="mb-6">Elektronik ortamdaki veriler geri döndürülemeyecek şekilde silinmekte, fiziksel ortamdaki belgeler ise kırpma makineleri ile yok edilmektedir.</p>
      </div>
    </div>
  );
}

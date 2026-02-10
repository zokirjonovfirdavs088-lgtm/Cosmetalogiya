export default function Home() {
  return (
    <main className="container">
      <div className="hero">
        <h1>Cosmetalogiya</h1>
        <p className="subtitle">Professional Kosmetologiya Xizmatlari</p>
        
        <div className="features">
          <div className="feature-card">
            <h2>📅 Qulay Vaqt</h2>
            <p>Dushanba - Juma: 9:00 dan 18:00 gacha</p>
          </div>
          
          <div className="feature-card">
            <h2>💼 Professional Xizmatlar</h2>
            <p>Malakali mutaxassislar tomonidan yuqori sifatli xizmat</p>
          </div>
          
          <div className="feature-card">
            <h2>📱 Oson Qabul</h2>
            <p>Telegram bot orqali tezkor qabulga yozilish</p>
          </div>
        </div>
        
        <div className="cta">
          <h3>Qabulga yozilish uchun botimizdan foydalaning</h3>
          <a 
            href="https://t.me/YOUR_BOT_USERNAME" 
            className="telegram-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>📱</span> Telegram botni ochish
          </a>
        </div>
      </div>
    </main>
  );
}

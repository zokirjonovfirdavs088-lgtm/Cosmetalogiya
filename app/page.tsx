'use client'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
    }}>
      <div style={{
        maxWidth: '600px',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '3rem',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          💆‍♀️ Cosmetalogiya
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: '1.6' }}>
          Профессиональные косметологические услуги
        </p>
        <div style={{
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '15px',
          padding: '2rem',
          marginBottom: '2rem',
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            📅 Запись через Telegram бот
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Удобная онлайн-запись на процедуры:<br />
            Пн-Пт: 9:00 - 18:00
          </p>
          <a
            href="https://t.me/your_bot_username"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#0088cc',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            🤖 Открыть бот
          </a>
        </div>
        <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
          <p>📞 Телефон для справок</p>
          <p>📍 Адрес вашего салона</p>
        </div>
      </div>
    </main>
  )
}

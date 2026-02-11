export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '600px',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '3rem',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          🌟 Cosmetalogiya
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
          Добро пожаловать в наш сервис записи на косметологию
        </p>
        
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '15px',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            📱 Запись через Telegram бот
          </h2>
          <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
            Используйте нашего Telegram бота для быстрой и удобной записи на процедуры
          </p>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#0088cc',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '10px',
            fontSize: '1.1rem',
            fontWeight: '600',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}>
            Открыть Telegram бот
          </div>
        </div>

        <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>
          <p>✅ Выбор удобного времени</p>
          <p>✅ Автоматическое подтверждение</p>
          <p>✅ Уведомления о записи</p>
        </div>
      </div>
    </main>
  )
}

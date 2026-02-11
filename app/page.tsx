export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Cosmetalogiya
          </h1>
          <p className="text-xl text-gray-600">
            Professional Kosmetologiya Xizmatlari
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Telegram Bot orqali band qiling
            </h2>
            <p className="text-gray-600">
              Bizning Telegram botimiz orqali oson va tez band qilish mumkin.
              Bot sizga quyidagilarni taklif qiladi:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>📅 Haftaning kunini tanlash</li>
              <li>⏰ Qulay vaqtni belgilash (09:00 - 18:00)</li>
              <li>📞 Telefon raqamingizni yuborish</li>
              <li>✅ Darhol tasdiqlash</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Bizning xizmatlarimiz:
            </h3>
            <ul className="space-y-2 text-blue-800">
              <li>💆 Yuz parvarishi</li>
              <li>💅 Manikur va pedikur</li>
              <li>💇 Soch kesish va rang berish</li>
              <li>✨ Professional kosmetik muolajalar</li>
            </ul>
          </div>

          <div className="text-center pt-4">
            <a
              href="https://t.me/YourBotUsername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Telegram Botga o&apos;tish
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>Ish vaqti: Dushanba - Juma, 09:00 - 18:00</p>
        </div>
      </div>
    </main>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Cosmetalogiya
        </h1>
        <p className="text-xl mb-4">
          Professional kosmetologiya xizmatlari
        </p>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Telegram Bot orqali ro&apos;yxatdan o&apos;ting
          </h2>
          <p className="mb-4">
            Bizning Telegram botimiz orqali tez va oson qilib uchrashuv vaqtini belgilang.
          </p>
          <div className="space-y-2">
            <p>✅ Haftaning istalgan kunini tanlang</p>
            <p>✅ O&apos;zingizga qulay vaqtni belgilang</p>
            <p>✅ Telefon raqamingizni yuboring</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Ish vaqti</h3>
          <p>Dushanba - Juma: 09:00 - 18:00</p>
        </div>
      </div>
    </main>
  )
}

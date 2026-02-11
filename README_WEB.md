# Cosmetalogiya

Professional косметология xizmatlari uchun Telegram bot va veb-sayt.

## Struktura

Ushbu loyiha ikki qismdan iborat:

1. **Telegram Bot** (Python) - `main.py` faylidagi bot mijozlarga band qilish imkoniyatini beradi
2. **Veb-Sayt** (Next.js) - Landing page va Speed Insights integratsiyasi

## Telegram Bot

Bot quyidagi funksiyalarni taqdim etadi:
- 📅 Haftaning kunini tanlash
- ⏰ Vaqtni belgilash (09:00 - 18:00)
- 📞 Telefon raqamini yuborish
- ✅ Band qilishni tasdiqlash

### Bot'ni ishga tushirish

```bash
pip install -r requirements.txt
python main.py
```

## Veb-Sayt (Next.js)

Veb-sayt Next.js App Router va Vercel Speed Insights bilan qurilgan.

### O'rnatish

```bash
npm install
```

### Development rejimi

```bash
npm run dev
```

Brauzerda http://localhost:3000 ga o'ting.

### Production build

```bash
npm run build
npm start
```

## Vercel Speed Insights

Ushbu loyiha Vercel Speed Insights integratsiyasiga ega. Bu sizga quyidagilarni kuzatish imkonini beradi:

- **LCP (Largest Contentful Paint)** - Sahifa yuklanish tezligi
- **FID (First Input Delay)** - Foydalanuvchi ta'sir vaqti
- **CLS (Cumulative Layout Shift)** - Layout stabillik
- **TTFB (Time to First Byte)** - Server javob vaqti

### Speed Insights konfiguratsiya

Speed Insights `app/layout.tsx` fayliga qo'shilgan:

```tsx
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

### Vercel'ga deploy qilish

1. Vercel account yarating: https://vercel.com/signup
2. Git repository'ni ulang
3. Deploy tugmasini bosing

Yoki CLI orqali:

```bash
npm install -g vercel
vercel deploy
```

### Speed Insights'ni yoqish

1. Vercel dashboard'ga o'ting
2. Project'ni tanlang
3. "Speed Insights" tab'ni oching
4. "Enable" tugmasini bosing

Deploy'dan keyin `/_vercel/speed-insights/script.js` skript sahifangizda mavjud bo'ladi.

## Texnologiyalar

- **Backend (Bot)**: Python, pyTelegramBotAPI
- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Analytics**: Vercel Speed Insights
- **Deployment**: Vercel

## Litsenziya

MIT

## Muallif

Cosmetalogiya jamoasi

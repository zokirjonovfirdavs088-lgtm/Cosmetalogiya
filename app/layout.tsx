import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cosmetalogiya - Косметология бот',
  description: 'Telegram bot для записи на косметологию',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}

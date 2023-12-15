import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'

const WorkSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend Menotr | FAQ Challenge',
  description: 'Frontend Menotr | FAQ Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon-32x32.png" type="image/x-icon" />
      </head>
      <body className={WorkSans.className}>{children}</body>
    </html>
  )
}

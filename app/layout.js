import './globals.css'
import { Providers } from './providers'
import { Inter } from 'next/font/google'
import Header from './ClientComponent/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Capstone Management System',
  description: 'In progress',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  )
}

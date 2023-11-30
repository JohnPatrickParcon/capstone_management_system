import './globals.css'
import { Providers } from './providers'
import { Inter } from 'next/font/google'
import NavHeader from './ClientComponent/NavHeader'

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
        <div className='h-screen bg-green-700'>
          <NavHeader/>
          {children}
        </div>
        </Providers>
      </body>
    </html>
  )
}

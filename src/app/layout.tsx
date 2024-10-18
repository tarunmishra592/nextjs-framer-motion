import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Az Bytes',
  description: 'Welcome to my vibrant and creative portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex justify-center space-x-6">
              <li><Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-yellow-300 transition-colors">About</Link></li>
              <li><Link href="/work" className="hover:text-yellow-300 transition-colors">My Work</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white mt-12 py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Az Bytes. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
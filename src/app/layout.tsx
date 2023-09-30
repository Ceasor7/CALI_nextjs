import Footer from './components/Footer'
import Header from './components/Header'
import Head from 'next/head'
import './globals.css'
import type { Metadata } from 'next'




export const metadata: Metadata = {
  title: 'CALI',
  description: 'Building a sustainable future for the arts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <div className="flex flex-col min-h-screen">
        <header>
          <Header />
        </header>
        <main className="flex-grow">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </html>
  )
}

import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

export const metadata = { title: 'HeartConnect' }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

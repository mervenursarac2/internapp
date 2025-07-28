import './globals.css'
import Layout from '@/components/layout/Layout'

export const metadata = {
  title: 'imü staj',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
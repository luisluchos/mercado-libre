import './globals.css'
import { getProducts } from './services'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let products =  await getProducts()
  console.log('products', products)
  return (
    <html lang='en'>
      <body className='container m-auto grid min-h-screen grid-rows-[auto,lfr,auto] px-4'>
        <header className='text-xl font-bold leading-[3rem]'>Mercado Libre</header>
        <main className='py-8'> {children}</main>
        <footer className='text-center loading-[3rem] opacity-70'>
          O {new Date().getFullYear()} Don Mighuel
        </footer>
      </body>
    </html>
  )
}

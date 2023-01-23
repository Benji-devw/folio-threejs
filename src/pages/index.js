import Head from 'next/head'
import Display from './Display'
import { Footer } from '@/components/Footer';


export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Navarro Benjamin</title>
        <meta name="portfolio" content="Porfolio Navarro benjamin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <main>
        <Display />
      </main>

      <Footer />
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { CardList, Header } from '../components/index';

export default function Home() {
  return (
    <>
      <Head>
        <title>MKS Home</title>
        <meta name="description" content="Product list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <main>
        <CardList />
      </main>
    </>
  )
}

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>USC Warbot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="A guerra de facultades" />
        <p className="description">
          Quen gañará?
        </p>
      </main>

      <Footer />
    </div>
  )
}

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from '../components/Head'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  const footerHeight = 16;

  return <div className="relative min-h-screen">
      <Head />
      <main className={ `pb-${footerHeight}` }>
        <Component {...pageProps} />
      </main>
      <div className={ `absolute bottom-0 left-0 right-0 h-${footerHeight}` }>
        <Footer/>
      </div>
    </div>
}

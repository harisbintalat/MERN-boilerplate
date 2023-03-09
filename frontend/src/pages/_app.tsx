import { AppPropsWithLayout } from '@customTypes/layouts'
import '@assets/styles/globals.css'


export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const siteKey = process.env['NEXT_PUBLIC_RECAPTCHA_SITE_KEY']

function MyApp({ Component, pageProps }: AppProps) {

  return (
    //This key is public and exposed in the front end network resources, so I didn't feel like it needed to be in environment variables.
    <GoogleReCaptchaProvider
    reCaptchaKey={'6Lf4Kx8iAAAAACYJEDtibMkJh6Ih9D0tjTonF-jE'}
    scriptProps={{
      async: false, // optional, default to false,
      defer: true, // optional, default to false
      appendTo: "body", // optional, default to "head", can be "head" or "body",
      nonce: undefined,
    }}>
    <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  )
}

export default MyApp

import Layout from "@/components/Layout"
import Seo from "@/components/Seo"
import "@/styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Seo title={process.env.siteTitle} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

import { CartProvider } from "@/context/Store"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Layout({ children }) {
  return (
    <CartProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </CartProvider>
  )
}

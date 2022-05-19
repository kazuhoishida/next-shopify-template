import Seo from "@/components/Seo"
import CartTable from "@/components/CartTable"
import CheckOutButton from "@/components/CheckOutButton"
import BackToProductButton from "@/components/BackToProductButton"
import { useCartContext } from "@/context/Store"

export default function CartPage() {
  const pageTitle = `Cart | ${process.env.siteTitle}`
  const [cart, checkoutUrl] = useCartContext()

  return (
    <div>
      <Seo title={pageTitle} />
      <CartTable cart={cart} />
      <CheckOutButton webUrl={checkoutUrl} />
      <BackToProductButton />
    </div>
  )
}

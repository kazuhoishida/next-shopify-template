import { useState, useEffect } from "react"
import Link from "next/link"
import { useCartContext } from "@/context/Store"

export default function Header() {
  const cart = useCartContext()[0]
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    let numItems = 0
    cart.forEach((item) => {
      numItems += item.variantQuantity
    })
    setCartItems(numItems)
  }, [cart])

  return (
    <header className="flex items-center justify-between">
      <Link href="/" passHref>
        <h1>{process.env.siteTitle}</h1>
      </Link>
      <div>
        <Link href="/cart" passHref>
          <a aria-label="cart">
            cart
            <span>({cartItems})</span>
          </a>
        </Link>
      </div>
    </header>
  )
}

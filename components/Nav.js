import { useState, useEffect } from "react"
import Link from "next/link"
import { useCartContext } from "@/context/Store"

export default function Nav() {
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
    <header className="z-20 px-10">
      <div className="flex items-center justify-between">
        <Link href="/" passHref>
          <a>
            <h1 className="flex items-center">
              <img height="20" width="20" alt="logo" className="mr-2" src="/icon.svg" />
              <span className="">{process.env.siteTitle}</span>
            </h1>
          </a>
        </Link>
        <div>
          <Link href="/cart" passHref>
            <a aria-label="cart">
              cart
              <span>{cartItems}</span>
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}

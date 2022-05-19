import { useState, useEffect } from "react"
import { useUpdateCartQuantityContext } from "@/context/Store"
import Link from "next/link"
import Price from "@/components/Price"
import { getCartSubTotal } from "@/utils/helpers"

function CartTable({ cart }) {
  const updateCartQuantity = useUpdateCartQuantityContext()
  const [cartItems, setCartItems] = useState([])
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    setCartItems(cart)
    setSubtotal(getCartSubTotal(cart))
  }, [cart])

  function updateItem(id, quantity) {
    updateCartQuantity(id, quantity)
  }

  return (
    <div className="min-h-80 max-w-2xl my-4 sm:my-8 mx-auto w-full">
      <table className="mx-auto">
        <thead>
          <tr className="uppercase text-xs sm:text-sm text-primary border-b border-light">
            <th className="font-normal px-6 py-4">Product</th>
            <th className="font-normal px-6 py-4">Quantity</th>
            <th className="font-normal px-6 py-4 hidden sm:table-cell">Price</th>
            <th className="font-normal px-6 py-4">Remove</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-lighter">
          {cartItems.map((item) => (
            <tr key={item.variantId} className="text-sm sm:text-base text-gray-600 text-center">
              <td className="font-medium px-4 sm:px-6 py-4 flex items-center">
                <img src={item.productImage.originalSrc} alt={item.productImage.altText} height={64} width={64} className={`hidden sm:inline-flex`} />
                <Link passHref href={`/products/${item.productHandle}`}>
                  <a className="pt-1 hover:text-dark">
                    {item.productTitle}, {item.variantTitle}
                  </a>
                </Link>
              </td>
              <td className="font-medium px-4 sm:px-6 py-4">
                <input
                  type="number"
                  inputMode="numeric"
                  id="variant-quantity"
                  name="variant-quantity"
                  min="1"
                  step="1"
                  value={item.variantQuantity}
                  onChange={(e) => updateItem(item.variantId, e.target.value)}
                  className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-light focus:ring-light"
                />
              </td>
              <td className="text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
                <Price currency="¥" num={item.variantPrice} numSize="text-lg" />
              </td>
              <td className="font-medium px-4 sm:px-6 py-4">
                <button aria-label="delete-item" className="" onClick={() => updateItem(item.variantId, 0)}>
                  remove
                </button>
              </td>
            </tr>
          ))}
          {subtotal === 0 ? null : (
            <tr className="text-center">
              <td></td>
              <td className="text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">Subtotal</td>
              <td className="text-lg text-primary font-medium px-4 sm:px-6 py-4">
                <Price currency="¥" num={subtotal} numSize="text-xl" />
              </td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CartTable

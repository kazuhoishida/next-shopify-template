import { useState, useEffect } from "react"
import { useUpdateCartQuantityContext } from "@/context/Store"
import Link from "next/link"
import Price from "@/components/Price"
import { getCartSubTotal } from "@/utils/helpers"

export default function CartTable({ cart }) {
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
    <div>
      <table className="mx-auto">
        <thead>
          <tr className="border-b border-black">
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-black">
          {cartItems.map(({ variantId, productImage, productHandle, variantTitle, productTitle, variantQuantity, variantPrice }) => (
            <tr key={variantId} className="text-sm sm:text-base text-gray-600 text-center">
              <td className="flex">
                <img src={productImage.originalSrc} alt={productImage.altText} height={64} width={64} />
                <Link passHref href={`/products/${productHandle}`}>
                  <a>
                    {productTitle}, {variantTitle}
                  </a>
                </Link>
              </td>
              <td>
                <input
                  type="number"
                  inputMode="numeric"
                  id="variant-quantity"
                  name="variant-quantity"
                  min="1"
                  step="1"
                  value={variantQuantity}
                  onChange={(e) => updateItem(variantId, e.target.value)}
                  className="form-input border border-black focus:border-light focus:ring-light"
                />
              </td>
              <td>
                <Price currency="¥" num={variantPrice} numSize="text-lg" />
              </td>
              <td>
                <button aria-label="delete-item" onClick={() => updateItem(variantId, 0)}>
                  remove
                </button>
              </td>
            </tr>
          ))}
          {subtotal === 0 ? null : (
            <tr className="text-center">
              <td></td>
              <td>Subtotal</td>
              <td>
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

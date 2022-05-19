import { useState } from "react"
import { useCartContext, useAddToCartContext } from "@/context/Store"

export default function ProductForm({ title, handle, variants, setVariantPrice, mainImg }) {
  const [quantity, setQuantity] = useState(1)
  const [variantId, setVariantId] = useState(variants[0].node.id)
  const [variant, setVariant] = useState(variants[0])
  const isLoading = useCartContext()[2]
  const addToCart = useAddToCartContext()

  const atcBtnStyle = isLoading ? `pt-3 pb-2 bg-primary text-white w-full flex justify-center items-baseline  hover:bg-dark opacity-25 cursor-none` : `pt-3 pb-2 bg-primary text-white w-full flex justify-center items-baseline  hover:bg-dark`

  function handleSizeChange(e) {
    setVariantId(e)

    const selectedVariant = variants.filter((v) => v.node.id === e).pop()

    setVariantPrice(selectedVariant.node.price)
    setVariant(selectedVariant)
  }

  async function handleAddToCart() {
    const { id, price, title } = variant.node
    // update store context
    if (quantity !== "") {
      addToCart({
        productTitle: title,
        productHandle: handle,
        productImage: mainImg,
        variantId: id,
        variantPrice: price,
        variantTitle: title,
        variantQuantity: quantity,
      })
    }
  }

  function updateQuantity(e) {
    e === "" ? setQuantity("") : setQuantity(Math.floor(e))
  }

  return (
    <div>
      <div>
        <div>
          <label>Qty.</label>
          <input
            type="number"
            inputMode="numeric"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            value={quantity}
            onChange={(e) => updateQuantity(e.target.value)}
            className="form-input border border-black w-16 focus:border-light focus:ring-light"
          />
        </div>
        <div>
          <label>Size</label>
          <select id="size-selector" name="size-selector" onChange={(event) => handleSizeChange(event.target.value)} value={variantId} className="form-select border border-black focus:border-light focus:ring-light">
            {variants.map(({ node: { id, title } }) => (
              <option id={id} key={id} value={id}>
                {title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button className={atcBtnStyle} aria-label="cart-button" onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  )
}

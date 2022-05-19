import Price from "@/components/Price"

export default function ProductInfo({ title, description, price }) {
  return (
    <div>
      <h1>{title}</h1>
      <Price currency="¥" num={price} numSize="text-2xl" />
      <p>{description}</p>
    </div>
  )
}

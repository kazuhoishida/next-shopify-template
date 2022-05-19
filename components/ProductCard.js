import Image from "next/image"
import Link from "next/link"
import Price from "@/components/Price"

export default function ProductCard({ product }) {
  const { handle, title, description } = product.node
  const price = product.node.variants.edges[0].node.price
  const thumbnail = product.node.images.edges[0].node

  return (
    <Link href={`/products/${handle}`} passHref>
      <a>
        <div className="h-80 relative">
          <Image src={thumbnail.originalSrc} alt={thumbnail.altText} layout="fill" objectFit="cover" />
        </div>
        <div className="h-auto relative">
          <h6 className="pt-4">{title}</h6>
          <p className="pt-2 pb-4">{description}</p>
          <Price currency="¥" num={price} numSize="text-md" />
        </div>
      </a>
    </Link>
  )
}

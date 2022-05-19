import Link from "next/link"

export default function BackToProductButton() {
  return (
    <Link href="/" passHref>
      <a aria-label="back-to-products" className="flex justify-center">
        Back To All Products
      </a>
    </Link>
  )
}

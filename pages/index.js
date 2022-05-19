import ProductCard from "@/components/ProductCard"
import { getAllProductsInCollection } from "@/lib/shopify"

export default function IndexPage({ products }) {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-20 mb-4 text-center">Shopify NextJS template</h1>
      <div className="grid grid-cols-3 gap-10">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const products = await getAllProductsInCollection()

  return {
    props: {
      products,
    },
  }
}

import { getProductSlugs, getProduct } from "@/lib/shopify"
import ProductImage from "@/components/ProductImage"
import ProductDetails from "@/components/ProductDetails"

function ProductPage({ productData }) {
  return (
    <div className="flex">
      <ProductImage images={productData.images.edges} />
      <ProductDetails productData={productData} />
    </div>
  )
}

export async function getStaticPaths() {
  const productSlugs = await getProductSlugs()

  const paths = productSlugs.map((slug) => {
    const product = String(slug.node.handle)
    return {
      params: { product },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const productData = await getProduct(params.product)

  return {
    props: {
      productData,
    },
  }
}

export default ProductPage

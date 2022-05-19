import Image from "next/image"

export default function ProductImage({ images }) {
  return (
    <div className="w-1/2">
      {images.map(({ node: { id, originalSrc, altText, width, height } }) => (
        <Image src={originalSrc} alt={altText} layout="responsive" width={width} height={height} key={id} />
      ))}
    </div>
  )
}

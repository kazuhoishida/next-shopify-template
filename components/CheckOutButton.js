function CheckOutButton({ webUrl }) {
  return (
    <a
      href={webUrl}
      aria-label="checkout-products"
      className="bg-primary text-white text-lg font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-light focus:outline-none w-full hover:bg-dark rounded-sm"
    >
      Check Out
    </a>
  )
}

export default CheckOutButton

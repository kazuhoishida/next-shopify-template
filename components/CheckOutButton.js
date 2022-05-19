export default function CheckOutButton({ webUrl }) {
  return (
    <a href={webUrl} aria-label="checkout-products" className="bg-primary text-white flex justify-center items-center focus:ring-1 focus:ring-light focus:outline-none">
      Check Out
    </a>
  )
}

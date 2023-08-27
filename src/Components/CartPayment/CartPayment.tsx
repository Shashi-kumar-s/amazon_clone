import { SiMediamarkt } from "react-icons/si"
import { useSelector } from "react-redux"
import { StoreProduct, stateProps } from "../../../type"
import { useEffect, useState } from "react"

const CartPayment = () => {
  const { ProductData, UserInfo } = useSelector((state: stateProps) => state.next)
  const [totalAmount, setTotalAmount] = useState(0)
  useEffect(() => {
    let amt = 0;
    ProductData.map((item: StoreProduct) => {
      return amt += item.price * item.quantity;
    })
    setTotalAmount(amt)
  }, [ProductData])
  return (
    <div className="flex flex-col gap-4 md:px-32 mdl:px-2 md:py-3">
      <div className=" flex gap-2">
        <span className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1"><SiMediamarkt /></span>
        <p className="text-sm">Your order qualifies for FREE Shipping by Choosing this option at Checkout.See details....</p>
      </div>
      <p className="flex items-center justify-between px-2 font-semibold">Total:<span className="font-bold text-xl lg:text-[16px]">&#x20b9;{" "}{totalAmount}.00</span></p>
      {UserInfo ? (<div className="flex flex-col items-center">
        <button className="w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50 text-white rounded-lg hover:bg-amazon_yellow hover:text-black">Proceed to Buy</button>
      </div>) 
      : 
      (<div className="flex flex-col items-center text-center">
        <button className="w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50 text-white rounded-lg cursor-not-allowed">Proceed to Buy</button>
        <p className="text-xs mt-1 text-red-500 font-semibold animate-bounce py-2">Please login to continue</p>
      </div>)

      }
    </div>
  )
}

export default CartPayment

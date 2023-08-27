import { resetCart } from "@/Store/Slice/NextSlice"
import { useDispatch } from "react-redux"

const ResetCart = () => {
    const dispatch=useDispatch()

    const handleResetCart=()=>{
        const confirmReset=window.confirm("Are you sure to reset your items from the cart?");
        if(confirmReset){dispatch(resetCart([]))}
    }
  return (
   <button className='w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300' onClick={handleResetCart}>reset cart</button>
  )
}

export default ResetCart
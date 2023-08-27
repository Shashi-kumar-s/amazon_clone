import { LuMenu } from "react-icons/lu"
import { stateProps } from "../../../type"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {signOut } from "next-auth/react"
import { removeUser } from "@/Store/Slice/NextSlice"


const BottomHeader = () => {
    const dispatch = useDispatch()

    const{UserInfo}=useSelector((state:stateProps)=>state.next)
    console.log(UserInfo);
    
    const handleSignOut=()=>{
      signOut();
      dispatch(removeUser(null))
    }

    return (
        <div className='w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center'>
            <p className="flex items-center gap-1 h-8 border border-transparent hover:border-white px-2 cursor-pointer duration-300 font-bold"><LuMenu className="text-xl" />All</p>
            <p className="hidden md:inline-flex items-center  h-8 border border-transparent hover:border-white px-2 cursor-pointer duration-300">Todays Deal</p>
            <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white px-2 cursor-pointer duration-300">Customer Service</p>
            <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white px-2 cursor-pointer duration-300">Best Sellers</p>
            <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white px-2 cursor-pointer duration-300">Gift Cards</p>
            <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white px-2 cursor-pointer duration-300">Sell</p>
            {UserInfo && (<button className="hidden xs:inline-flex items-center h-8 border border-transparent text-amazon_yellow hover:border-red-600 hover:text-red-400 px-2 cursor-pointer duration-300" onClick={handleSignOut}>Sign Out</button>)}
        </div>
    )
}

export default BottomHeader
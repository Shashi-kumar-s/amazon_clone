import Link from "next/link"
import Image from "next/image"
import logo from "../../Images/logo.png"
import cartIcon from "../../Images/cartIcon.png"
import { SlLocationPin } from "react-icons/sl"
import { HiOutlineSearch } from "react-icons/hi"
import { BiCaretDown } from "react-icons/bi"
import { stateProps } from "../../../type"
import { useDispatch, useSelector } from "react-redux"
import { useSession, signIn } from "next-auth/react"
import {useEffect} from 'react'
import { addUser } from "@/Store/Slice/NextSlice"


const Header = () => {
    const {ProductData,FavoriteData,UserInfo}=useSelector((state:stateProps)=>state.next)
    const dispatch=useDispatch()


     const { data: session} = useSession()
     useEffect(() => {
      if(session){
        dispatch(addUser({
            name:session?.user?.name,
            email:session?.user?.email,
            image:session?.user?.image
        }))
      }
     }, [session])
     

    return (
        <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
            <div className="w-full h-full mx-auto inline-flex items-center px-4 justify-between gap-1 mdl:gap-3">
                <Link href={"/"} className="px-2 border border-transparent hover:border-white cursor-pointer items-center flex duration-300 justify-center h-[70%]">
                    <Image className="w-28 object-cover mt-1" src={logo} alt="logoImg"/>
                </Link>
                <div className="px-2 border border-transparent hover:border-white cursor-pointer items-center duration-300 justify-center h-[70%] hidden xl:inline-flex gap-1">
                    <SlLocationPin />
                    <div className="text-xs">
                        <p>Delivery to</p>
                        <p className="text-white font-bold">Select your address</p>
                    </div>
                </div>
                <div className="flex-1 h-10 hidden md:inline-flex relative justify-between items-center  ">
                    <input className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow" type="text" placeholder="Search  amazon product" />
                    <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md"><HiOutlineSearch /></span>
                </div>
               {
                UserInfo?(
                    <div className="px-2 border border-transparent hover:border-white cursor-pointer text-gray-100 flex duration-300 h-[70%] gap-1 items-center justify-between ">
                    <Image src={UserInfo.image} className="w-8 h-8 rounded-full object-cover " alt="userImage" />
                    <div className="text-xs text-gray-100 flex flex-col">
                        <p className="font-bold">{UserInfo.name}</p>
                        <p>{UserInfo.email}</p>
                    </div>
                </div>
                ):(
                    <div onClick={()=>signIn()} className="px-2 border border-transparent hover:border-white cursor-pointer text-gray-100 flex flex-col justify-center text-center">
                    <p className="text-sm">Hello,sign in</p>
                    <p className="font-bold text-white flex items-center text-sm ">Accounts & Lists{" "}
                        <span className="pl-1"><BiCaretDown /></span>
                    </p>
                </div>
                )
               }
                <Link href={"/WishList"}><div className="px-2 border border-transparent hover:border-white cursor-pointer text-gray-100 flex flex-col justify-center text-center relative xs:hidden sml:inline-flex">
                    <p className="text-sm">Marked</p>
                    <p className="font-bold text-white text-sm ">& Favorite</p>
                    {
                        FavoriteData.length>0 &&(<span className="absolute right-0 top-1.5 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow">{FavoriteData.length}</span>)
                    }
                </div></Link>
                <Link href="/Cart" className="flex justify-center items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">
                    <Image className="w-auto object-cover h-8" src={cartIcon} alt="cartImg" />
                    <p className="text-white mt-3 text-sm">cart</p>
                    <span className="absolute text-amazon_yellow top-2 left-[32px] xs:left-[22px] sm:left-[30px] font-semibold text-sm">{ProductData?ProductData.length:0}</span>
                </Link>
            </div>
        </div>
    )
}

export default Header
import { useSelector } from 'react-redux'
import { StoreProduct, stateProps } from '../../type'
import Link from 'next/link'
import Image from 'next/image'
import wishlist from "../Images/wishlistimg.webp"
import { useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io"
import { useDispatch } from "react-redux";
import { removeFavorite } from '@/Store/Slice/NextSlice'



const WishList = () => {
  const dispatch = useDispatch()

  const { FavoriteData } = useSelector((state: stateProps) => state.next)
  const [totalAmount, setTotalAmount] = useState(0)
  const [totalquantity, settotalQuantity] = useState(0)

  useEffect(() => {
    let amt = 0;
    let qty = 0;
    FavoriteData.map((item: StoreProduct) => {
      return (amt += item.price * item.quantity,
        qty += item.quantity)
    })
    setTotalAmount(amt)
    settotalQuantity(qty)
  }, [FavoriteData])

  return (
    <div className='max-w-screen-2xl mx-auto px-6 grid  gap-10 py-4 lgl:gap-6 lg:gap-2 mdl:gap-3'>
      {
        FavoriteData.length > 0 ? (
          <>
            <div className='bg-white col-span-8 lgl:col-span-4 md:col-span-5 mdl:col-span-3 lg:col-span-4 p-4 rounded-lg'>
              <div className=' flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1'>
                <p className='text-2xl font-semibold text-amazon_blue'>Wish List</p>
              </div>
              <div className='pt-2 flex flex-col gap-2'>
                {FavoriteData.map((item: StoreProduct) => {
                  return (
                    <>
                    <div key={item.id} className='flex justify-between items-center xs:flex-col md:flex-row'>
                      <div>
                        <p className='text-gray-400'>{item.category}</p>
                        <p className='font-semibold'>{item.title}</p>
                      </div>
                      <div className='text-center font-semibold py-1'>
                      <p>Stock :{" "}{item.stock}{" "}<span className='text-sm'>pcs</span></p>
                      </div>
                      <div className='text-center font-semibold py-1'>
                        <p>&#x20b9;{" "}{item.price}.00</p>
                      </div>
                      <div className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300 " onClick={() => dispatch(removeFavorite(item.id))}><IoMdClose className="mt-[2px]" /><p>remove</p></div>
                    </div>
                      <hr />
                    </>
                  )
                })}
                <hr />
                <div className="text-lg xs:text-center  text-gray-900 flex flex-col lg:flex-row lg:justify-end px-2 ">
                  <p className='text-lg'>Subtotal <span className='px-1'>({totalquantity}{" "}items):</span></p>
                  <div>
                    <span className='font-semibold text-black '>&#x20b9;{" "}{totalAmount}.00</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className='bg-white h-100 col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg'>
            <Image src={wishlist} width={300} height={300} alt='emptyCartImg' />
            <h2 className='text-lg font-medium'>Your wish list is Empty</h2>
            <Link href={"/"}>
              <button className='w-52 h-10 bg-amazon_blue text-white rounded-md text-sm font-semibold hover:bg-amazon_yellow hover:text-black'>Go To HomePage</button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default WishList
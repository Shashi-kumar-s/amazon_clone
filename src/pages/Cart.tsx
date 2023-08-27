import { useSelector } from 'react-redux'
import { StoreProduct, stateProps } from '../../type'
import CartProduct from '@/Components/CartProduct/CartProduct'
import ResetCart from '@/Components/ResetCart/ResetCart'
import Link from 'next/link'
import Image from 'next/image'
import emptycart from "../Images/empty_cart.jpeg"
import CartPayment from '@/Components/CartPayment/CartPayment'
import { useEffect, useState } from 'react'


const Cart = () => {
  const { ProductData } = useSelector((state: stateProps) => state.next)
  const [totalAmount, setTotalAmount] = useState(0)
  const [totalquantity, settotalQuantity] = useState(0)

  useEffect(() => {
    let amt = 0;
    let qty = 0;
    ProductData.map((item: StoreProduct) => {
      return (amt += item.price * item.quantity,
        qty += item.quantity)
    })
    setTotalAmount(amt)
    settotalQuantity(qty)
  }, [ProductData])

  return (
    <div className='max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4 lgl:gap-6 lg:gap-2 mdl:gap-3'>
      {
        ProductData.length > 0 ? (
          <>
            <div className='bg-white col-span-8 lgl:col-span-4 md:col-span-5 mdl:col-span-3 lg:col-span-4 p-4 rounded-lg'>
              <div className=' flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1'>
                <p className='text-2xl font-semibold text-amazon_blue'>Shopping cart</p>
              </div>
              <div className='pt-2 flex flex-col gap-2'>
                {ProductData.map((item: StoreProduct) => {
                  return (
                    <div key={item.id}>
                      <CartProduct item={item} />
                    </div>)
                })}
                <hr />
                <div className="text-lg xs:text-center  text-gray-900 flex flex-col lg:flex-row lg:justify-end px-2 ">
                  <p className='text-lg'>Subtotal <span className='px-1'>({totalquantity}{" "}items):</span></p>
                  <div>
                    <span className='font-semibold text-black '>&#x20b9;{" "}{totalAmount}.00</span>
                  </div>
                </div>
                <div className='bg-white h-80 col-span-1 p-4 rounded-lg flex item-center justify-center mdl:hidden md:inline-flex'>
                  <CartPayment />
                </div>
                <ResetCart />
              </div>
            </div>
            <div className='bg-white h-80 col-span-1 mdl:col-span-2 lg:col-span-1 lgl:col-span-1 hidden mdl:inline-flex p-4 rounded-lg item-center justify-center'>
              <CartPayment />
            </div>
          </>
        ) : (
          <div className='bg-white h-80 col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg'>
            <Image src={emptycart} width={300} height={300} alt='emptyCartImg' />
            <h2 className='text-lg font-medium'>Your Cart is Empty</h2>
            <Link href={"/"}>
              <button className='w-52 h-10 bg-amazon_blue text-white rounded-md text-sm font-semibold hover:bg-amazon_yellow hover:text-black'>Go To Shopping</button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Cart
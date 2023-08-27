import { HiShoppingCart } from "react-icons/hi";
import {FaHeart} from "react-icons/fa"
import { ProductProps } from "../../../type";
import Image from "next/image";
import {useDispatch} from "react-redux"
import { addToCart } from "@/Store/Slice/NextSlice";
import { addToFavorite } from "@/Store/Slice/NextSlice";

const Product = ({ ProductData }: any) => {
  const dispatch=useDispatch()
  
  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-300 to-gray-400 w-full px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lgl:grid-cols-4 xl:grid-cols-5 gap-6 ">
      {ProductData.products.map(({ 
        category,
        description,
        discountPercentage,
        id,
        images,
        price,
        rating,
        stock,
        title }:ProductProps) => {
        return (
          <div key={id} className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group">
            <div className="w-full relative overflow-hidden ">
              <div className="min-h-[230px] md:min-h-[230px] xl:min-h-[230px]">
            <Image className=" w-full object-contain scale-90 hover:scale-100 transition-transform duration-300 mx-auto max-h-[230px]" src={images[0]} width={230} height={230} alt=""/>
              </div>
            <div className="w-12 h-24 absolute bottom-16 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 duration-300 transition-transform">
            <span className="w-full h-full border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300"  onClick={()=>dispatch(addToCart({id:id,price:price,title:title,category:category,description:description,discountPercentage:discountPercentage,rating:rating,stock:stock,quantity:1,image:images}))}><HiShoppingCart/></span>
            <span className="w-full h-full border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300"  onClick={()=>dispatch(addToFavorite({id:id,price:price,title:title,category:category,description:description,discountPercentage:discountPercentage,rating:rating,stock:stock,quantity:1,image:images}))}><FaHeart/></span>
          </div>
          <hr />
             <div className="px-4 py-3 flex flex-col gap-1">
              <p className="text-sm text-gray-500 tracking-wide">{category}</p>
              <p className="text-base font-medium">{title}</p>
              <p>&#x20b9;<span className="text-amazon_blue font-semibold">{" "}{price}</span></p>
              <p className="text-xs text-gray-600 text-justify">{description.substring(0,44)}</p>
              <button className="h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow hover:text-black duration-300 mt-2 " onClick={()=>dispatch(addToCart({id:id,price:price,title:title,category:category,description:description,discountPercentage:discountPercentage,rating:rating,stock:stock,quantity:1,image:images[0]}))}>Add To Cart</button>
             </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Product

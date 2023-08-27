import Image from "next/image";
import { LuPlus } from "react-icons/lu"
import { LuMinus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io"
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeProduct } from "@/Store/Slice/NextSlice";

interface Item {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    image: string;
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
    quantity: number;
}
interface CartProductProps {
    item: Item
}
const CartProduct = ({ item }: CartProductProps) => {
    const dispatch=useDispatch()

    return (
        <div className="bg-gray-100 rounded-lg flex items-center gap-4 py-4 xs:flex-col sm:flex-col sml:flex-col md:flex-row">
            <div>
            <Image className="object-cover" src={item.image} width={150} height={150} alt="productImage" />
            </div>
            <div className=" flex items-center px-2 gap-4">
                <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <p className="fonts-semibold text-amazon_blue">&#x20b9;{" "}{item.price}</p>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center justify-between mt-1 border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300 ">
                            <span className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300" onClick={()=>dispatch(increaseQuantity({id:item.id,price:item.price,title:item.title,category:item.category,description:item.description,discountPercentage:item.discountPercentage,rating:item.rating,stock:item.stock,quantity:1,image:item.image
                            }))}><LuPlus /></span>
                            <span>{item.quantity}</span>
                            <span className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300" onClick={()=>dispatch(decreaseQuantity({id:item.id,price:item.price,title:item.title,category:item.category,description:item.description,discountPercentage:item.discountPercentage,rating:item.rating,stock:item.stock,quantity:1,image:item.image}))}><LuMinus /></span>
                        </div>
                        <div className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300 " onClick={()=>dispatch(removeProduct(item.id))}><IoMdClose className="mt-[2px]" /><p>remove</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct
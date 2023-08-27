import Banner from "@/Components/Banner/Banner";
import Product from "@/Components/Product/Product";
import { ProductProps } from "../../type";

interface Props {
   ProductData: ProductProps;
}

export default function Home({ProductData}:Props) {
  return (
   <main>
    <div className="max-w-screen-xxl mx-auto">
      <Banner/>
      <div className="relative md:-mt20 lgl:-mt32 xl:-mt60 z-20 mb-10 mt-[-20px]">
      <Product ProductData={ProductData}/>
      </div>
    </div>
   </main>
  )
}

export const getServerSideProps=async()=>{
  const res=await fetch('https://dummyjson.com/products?&limit=100');
  const ProductData=await res.json();
  console.log(Array.isArray(ProductData));
  
  return{props:{ProductData}}
}
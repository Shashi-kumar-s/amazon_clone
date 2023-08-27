import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

import ProductPageImg2 from "../../Images/Slider/ProductPageImg2.jpg"
import ProductPageImg3 from "../../Images/Slider/ProductPageImg3.jpg"
import ProductPageImg4 from "../../Images/Slider/ProductPageImg4.jpg"
import ProductPageImg5 from "../../Images/Slider/ProductPageImg5.jpg"

const Banner = () => {
    return (
        <div className='relative'>
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false}showThumbs={false} interval={3000}>
            <div>
                <Image priority src={ProductPageImg2} alt='bannerImg'/>
            </div>
            <div>
                <Image src={ProductPageImg3} alt='bannerImg'/>
            </div>
            <div>
                <Image src={ProductPageImg4} alt='bannerImg'/>
            </div>
            <div>
                <Image src={ProductPageImg5} alt='bannerImg'/>
            </div>
        </Carousel>
        {/* <div className='w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20'></div> */}
        </div>
    )
}

export default Banner
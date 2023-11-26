import img1 from '../../../../assets/b1e5f216-5018-4af5-aec1-e4538cfeb971.png'
import img2 from '../../../../assets/home-logo-and-symbols-vector-removebg-preview.png'
import img3 from '../../../../assets/pngtree-real-estate-logo-png-image_1602628.jpg'
import img4 from '../../../../assets/Realstate-and-construction-logo.jpg'
import img5 from '../../../../assets/Real Estate -1.png'
import img6 from '../../../../assets/real-estate-logo-maker-11.png'
import img7 from '../../../../assets/Real-Estate-Logo-Design-3d-psd-scaled.jpg'
import img8 from '../../../../assets/Professional-Real-Estate-Logo-Template-JPEG-3.jpg'

import Marquee from "react-fast-marquee";
const Marque = () => {
    return (
        <div>
            <div className="mt-10 mb-5 text-xl ">Trusted By <span className='text-2xl text-orange-300'>150+</span> Companies</div>
        <div className='flex gap-10'>
        <Marquee pauseOnHover={true} speed={100}>
            <img className='w-24 mr-10' src={img1} alt="" />
            <img className='w-24 mr-10' src={img2} alt="" />
            <img className='w-24 mr-10' src={img3} alt="" />
            <img className='w-24 mr-10' src={img4} alt="" />
            <img className='w-24 mr-10' src={img5} alt="" />
            <img className='w-24 mr-10' src={img6} alt="" />
            <img className='w-24 mr-10' src={img7} alt="" />
            <img className='w-24 mr-10' src={img8} alt="" />
            
         </Marquee>
        </div>
        </div>
    );
};

export default Marque;

import { FcViewDetails } from "react-icons/fc";
const AdvertiseProperty = ({item}) => {
    const { image,location, priceRange, verificationStatus} = item;
    return (
        <div>
             <div className="flex flex-col-2 ">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-orange-400">Location: {location}</h3>
                <p>Status:{verificationStatus}</p>
                <p className="text-yellow-500">${priceRange}</p>
            <div className="flex"><button className=" btn bg-pink-100 font-bold">Details</button>
            <FcViewDetails className="mt-3"></FcViewDetails></div>
            </div>
           
        </div>
        </div>
    );
};

export default AdvertiseProperty;
import { Link } from "react-router-dom";
import UseProperty from "../../../Hook/UseProperty";


const AllPropertiesCard = ({item}) => {
    
    const {_id, image,title,location, priceRange, verificationStatus,description,agent} = item;
   
    return (
        <div>
              <div className="card w-96 bg-orange-200 ">
            <figure className="px-2 pt-2">
                <img src={image} alt="Shoes" className="rounded-xl h-[240px] w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h2 className="font-bold">Status: {verificationStatus} <br /> <span>Price Range:{priceRange}</span></h2>
                <p>Location: {location}</p>
                <p className="text-sm">Notes:{description}</p>
                <p className="items-center justify-center flex text-amber-900 border-b-2">DONATED BY</p>
               <div className="flex justify-between"> <p className="text-xl mt-5 text-orange-500">{agent.name}</p>
               <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={agent.image} />
  </div>
    </div>
                <div className="card-actions justify-center items-center">
                    <Link to={`/propertydetails/${_id}`}>
                        <button className="btn bg-orange-400 w-full text-white ">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AllPropertiesCard;
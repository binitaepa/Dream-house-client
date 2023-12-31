import { Link } from "react-router-dom";



const AllPropertiesCard = ({item}) => {
    
    const {_id, image,title,location, priceRange, verificationStatus,description,agent} = item;
   console.log(item)
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
                <p className="text-sm">Notes:{description?description:'not added'}</p>
                <p className="items-center justify-center flex text-amber-900 border-b-2">Agent</p>
               <div className="flex justify-between"> <p className="text-xl mt-5 text-orange-500">{agent.name}</p>
               <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
               <div className="avatar">
  <div className="w-24 mask mask-hexagon">
    <img src={agent.image} />
  </div>
  </div>
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
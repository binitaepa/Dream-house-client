import { Link } from "react-router-dom";
import UseWish from "../../../Hook/UseWish";


const Wish = () => {
    const [wish]=UseWish();
    return (
        <div>
            <h2 className="text-center text-2xl font-bold">Your Wish</h2>
            <div className="grid md:grid-cols-2 mt-10 ml-5 gap-10">
            {
                wish.map((item)=> <div key={item._id} className="card w-96 bg-orange-200 ">
                <figure className="px-2 pt-2">
                    <img src={item.image} alt="Shoes" className="rounded-xl h-[240px] w-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <h2 className="font-bold">Status: {item.verificationStatus} <br /> <span>Price Range:{item.priceRange}</span></h2>
                    <p>Location: {item.location}</p>
                    <p className="text-sm">Notes:{item.description}</p>
                    <p className="items-center justify-center flex text-amber-900 border-b-2">AGENT</p>
                   <div className="flex justify-between"> <p className="text-xl mt-5 text-orange-500">{item.agent.name}</p>
                   <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                   <div className="avatar">
      <div className="w-24 mask mask-hexagon">
        <img src={item.agent.image} />
      </div>
      </div>
      </div>
        </div>
                    <div className="card-actions justify-between flex ">
                        <Link to={`/dashboard/makeoffer`}>
                            <button className="btn bg-orange-400 w-full text-white ">Make Offer</button>
                            
                        </Link>
                        <button className="btn bg-orange-400  text-white ">Remove</button>
                    </div>
                   
                </div>
            </div>)
            }
            </div>
        </div>
    );
};

export default Wish;
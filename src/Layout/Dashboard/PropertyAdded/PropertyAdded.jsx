import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const PropertyAdded = () => {
     const axiosSecure=UseAxiosSecure();
    const {data : property =[],refetch}=useQuery({
        queryKey:['addpropertylist'],
        queryFn: async ()=>{
            const res =await axiosSecure.get('/addpropertylist');
            return res.data;
        }
    })


    const propertyDelete=(item)=>{
        console.log(item);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/addpropertylist/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                           refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
        <h2 className="text-center text-2xl font-bold">Property</h2>
        <div className="grid md:grid-cols-2 mt-10 ml-5 gap-10">
        {
            property.map((item)=> <div key={item._id} className="card w-96 bg-orange-200 ">
            <figure className="px-2 pt-2">
                <img src={item.selectedImage} alt="Image" className="rounded-xl h-[200px] w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Property:{item.title}</h2>
                <p>Price:{item.price}$</p>
                
                <p>Location: {item.location}</p>
                
                <p className="items-center justify-center flex text-amber-900 border-b-2">AGENT</p>
               <div className="flex flex-col justify-between"> 
               <p className="text-xl mt-5 text-orange-500">Name: {item.name}</p>
               
               <p className="text-xl mt-5 text-orange-500">Email:{item.email}</p>
          
    </div>
    <button className="btn items-center bg-orange-400">Verified or not?</button>
                <div className="card-actions justify-between flex ">
                    <Link to={`/dashboard/updateproperty ${item._id}`}>
                        <button className="btn bg-orange-400 w-full text-white ">Update</button>
                        
                    </Link>
                    <button onClick={()=>propertyDelete(item)} className="btn bg-orange-400  text-white ">Delete</button>
                </div>
               
            </div>
        </div>)
        }
        </div>
    </div>
    );
};

export default PropertyAdded;
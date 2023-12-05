import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
import Swal from "sweetalert2";



const ManageProperty = () => {
    
    const axiosSecure=UseAxiosSecure()
     const {data : property =[]}=useQuery({
        queryKey:['addpropertylist'],
        queryFn: async ()=>{
            const res =await axiosSecure.get('/addpropertylist');
            return res.data;
        }
    })
const handleVerify=async (item)=>{
  
    const addproperty = {
        image:'Not attatched',
        title: item.title,
        location: item.location,
        
        agent: {
            name:item.name,
            email:item.email,
          },
verificationStatus:'verified',
       description:'added successfully',
        priceRange:item.price
       
    }
    // 
    const propertyRes = await axiosSecure.post('/properties', addproperty);
    console.log(propertyRes.data)
    if(propertyRes.data.insertedId){
        // show success popup
        
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.title} is added to the data.`,
            showConfirmButton: false,
            timer: 1500
          });
    }
}
const handleReject=()=>{
    Swal.fire({
        title: 'Sure to reject?',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Done'
      })
}
    return (
        <div>
            <div className="flex justify-evenly mb-8">
                <h2 className="text-4xl">Property : {property.length}</h2>
            
               
            </div>
            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>location</th>
                            <th>title</th>
                            <th>agent name</th>
                            <th>agent email</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            property.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                {item.location}
                                </td>
                                <td>
                                    {item.title}
                                </td>
                                <td>${item.email}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                { item.verificationStatus === 'verified' ? 'Verified' : <button
                                          onClick={() => handleVerify(item)}
                                          className="btn bg-green-500 ">
                                          Verify
                                    </button>}
                                   
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleReject(item._id)}
                                        className="btn bg-red-500">
                                     Reject
                                    </button>
                                </td>
                            </tr>)
                           
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
   
};

export default ManageProperty;
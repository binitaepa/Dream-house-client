import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
import Swal from "sweetalert2";
import UseAuth from "../../../Hook/UseAuth";
import { useState } from "react";


const AgentAddProperty = () => {
    const { register, handleSubmit,reset} = useForm();
    const [selectedImage, setSelectedImage] = useState(null);
    const axiosSecure=UseAxiosSecure();
    
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setSelectedImage(file);
    };

const {user}=UseAuth();
 const email=user.email;
 const  name=user.displayName;
    const onSubmit =async (data) => {
        console.log(data)
        
        
         // now send the menu item data to the server with the image url
         const addproperty = {
             title: data.title,
             location: data.location,
             selectedImage,
             email,
             name,
             price:data.price
            
         }
         // 
         const propertyRes = await axiosSecure.post('/addpropertylist', addproperty);
         console.log(propertyRes.data)
         if(propertyRes.data.insertedId){
             // show success popup
              reset();
             Swal.fire({
                 position: "top-end",
                 icon: "success",
                 title: `${data.title} is added to the data.`,
                 showConfirmButton: false,
                 timer: 1500
               });
         }
     
     }
    return (
        <div className="ml-10">
                <form className="bg-pink-200" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="add title"
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    {/* location */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Location*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="location"
                            {...register('location', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    {/* image */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Property Image*</span>
                        </label>
                        <input
                            type="file"
                            placeholder="image"
                           onChange={handleImageChange}
                            
                            className="input input-bordered w-full" />
                    </div>
                  
                    <div className="flex gap-6">
                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">price*</span>
                            </label>
                            <select defaultValue="default" {...register('price', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select amount</option>
                                <option value="1,00000">1,00000</option>
                                <option value="2,00000">2,00000</option>
                                <option value="3,00000">3,00000</option>
                                <option value="4,00000">4,00000</option>
                                <option value="5,00000">5,00000</option>
                            </select>
                        </div>
                         {/* agent */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Agent Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Agent Name"
                           value={user.displayName}
                            
                            className="input input-bordered w-full" />
                    </div>
                       

                        {/* email */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Agent email*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                               value={user.email}
                                className="input input-bordered w-full" />
                        </div>
                       

                    </div>
                   
                   

                   

                    <button className="btn mt-5 items-center bg-blue-400">
                        Add Property
                    </button>
                </form>
            </div>
        
    );
};

export default AgentAddProperty;
import { useForm } from "react-hook-form";

import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
import Swal from "sweetalert2";


const MakeOffer = () => {
    const { register, handleSubmit,reset} = useForm();
    
    const axiosSecure=UseAxiosSecure()
    const onSubmit =async (data) => {
   console.log(data)
   
   
    // now send the menu item data to the server with the image url
    const offerItem = {
        title: data.title,
        location: data.location,
        agent:data.agent,
        amount: data.amount,
        email: data.email,
        name:data.name,
        status:data.status
       
    }
    // 
    const wishRes = await axiosSecure.post('/wishlist', offerItem);
    console.log(wishRes.data)
    if(wishRes.data.insertedId){
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
        <div>
            <div className="ml-10">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    {/* agent */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Agent Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Agent Name"
                            {...register('agent', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">offered Amount*</span>
                            </label>
                            <select defaultValue="default" {...register('amount', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select amount</option>
                                <option value="1,00000">1,00000</option>
                                <option value="2,00000">2,00000</option>
                                <option value="3,00000">3,00000</option>
                                <option value="4,00000">4,00000</option>
                                <option value="5,00000">5,00000</option>
                            </select>
                        </div>
                        {/* status */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">status*</span>
                            </label>
                            <select defaultValue="default" {...register('status', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select amount</option>
                                <option value="verified">verified</option>
                                <option value="pending">pending</option>
                                
                            </select>
                        </div>

                        {/* email */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Buyer email*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                {...register('email', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Buyer name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                   
                   

                   

                    <button className="btn mt-5 bg-orange-400">
                        Offer
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MakeOffer;
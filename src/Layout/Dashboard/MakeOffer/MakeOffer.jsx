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
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
       
    }
    // 
    const wishRes = await axiosSecure.post('/wishOffer', offerItem);
    console.log(wishRes.data)
    if(wishRes.data.insertedId){
        // show success popup
        reset();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} is added to the wish.`,
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
                            {...register('name', { required: true })}
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
                            placeholder="add title"
                            {...register('name', { required: true })}
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
                            placeholder="add title"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">offered Amount*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select amount</option>
                                <option value="1,00000">1,00000</option>
                                <option value="2,00000">2,00000</option>
                                <option value="3,00000">3,00000</option>
                                <option value="4,00000">4,00000</option>
                                <option value="5,00000">5,00000</option>
                            </select>
                        </div>

                        {/* email */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Your email*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Your name*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
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
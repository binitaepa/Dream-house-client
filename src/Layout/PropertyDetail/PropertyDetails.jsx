import { useLoaderData } from "react-router-dom";
import { MdDescription } from "react-icons/md";
import { FaLaptopHouse } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { TbJewishStar } from "react-icons/tb";
import { GoCodeReview } from "react-icons/go";
const PropertyDetails = () => {
    const handleAddToList=()=>{

    }
    const {_id, image,title,location, priceRange, verificationStatus,description,agent} = useLoaderData();
    return (
        <div className="flex items-center justify-center flex-col mt-5 gap-10">
            <h2 className="text-2xl font-bold text-orange-400 items-center">---------Title: {title}------</h2>
            <p className="text-3xl flex">{description} <MdDescription></MdDescription></p>
            <p className="text-red-600 flex">{priceRange} <IoPricetagOutline></IoPricetagOutline></p>
            <p className="text-3xl flex gap-2">Agent: {agent.name}<FaLaptopHouse></FaLaptopHouse></p>
           
            <button onClick={handleAddToList} className="bg-orange-400 btn text-white ">Add To WishList <TbJewishStar></TbJewishStar></button>
            <button  className=" ">
            <button className="btn bg-orange-400 btn text-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>Review<GoCodeReview></GoCodeReview> </button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">......Review This.....</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog></button>
        </div>
    );
};

export default PropertyDetails;
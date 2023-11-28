import { Navigate, useLoaderData, useLocation } from "react-router-dom";
import { MdDescription } from "react-icons/md";
import { FaLaptopHouse } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { TbJewishStar } from "react-icons/tb";
import { GoCodeReview } from "react-icons/go";

import UseAuth from "../../Hook/UseAuth";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hook/UseAxiosSecure";
import UseWish from "../../Hook/UseWish";
import Review from "../Pages/Home/Review/Review";



const PropertyDetails = () => {
    const axiosSecure=UseAxiosSecure()
    const [,refetch]=UseWish();
    const {_id, image,title,location, priceRange, verificationStatus,description,agent} = useLoaderData();
 
 const {user}=UseAuth();
 const location1=useLocation()
 const currentDate = new Date();
const currentTime = currentDate.toLocaleTimeString();


const handleReview=(e)=>{
e.preventDefault();
const form = e.target;
        const rating = form.rating.value;
        console.log(rating)
       
 if(user && user.email){
  const ratelist={
   rateId:_id,
  
   time: currentTime,
   rating:rating,
   title,
   agent,
   description
  }
  console.log(ratelist)
 axiosSecure.post('/ratelist',ratelist)
 .then(res=>{
  console.log(res.data)
  if(res.data.insertedId){
      if (res.data.insertedId) {
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${title} rate added`,
              showConfirmButton: false,
              timer: 1500
          });
          // refetch cart to update the cart items count
         refetch();
  }
}
})
}
else{
  Swal.fire({
    title: "You are not Logged In",
    text: "Please login to add review",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, login!"
}).then((result) => {
    if (result.isConfirmed) {
        //   send the user to the login page
        Navigate('/login', { state: { from: location1 } })
    }
});
}

}


  const handleAddToList=()=>{
    
       if(user && user.email){
        const wishItem ={
          menuId:_id,
          email:user.email,
          image,
          title,
          location,
          priceRange,
          verificationStatus,
          description,
          agent
        }
        axiosSecure.post('/wish',wishItem)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${title} added to your wish`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // refetch cart to update the cart items count
                   refetch();
            }
        }
        })
       }
  else{
    Swal.fire({
      title: "You are not Logged In",
      text: "Please login to add to the wishlist?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, login!"
  }).then((result) => {
      if (result.isConfirmed) {
          //   send the user to the login page
          Navigate('/login', { state: { from: location1 } })
      }
  });
  }
  }
    return (
        <div className="flex items-center justify-center flex-col mt-5 gap-10">
            <h2 className="text-2xl font-bold text-orange-400 items-center">---------Title: {title}------</h2>
            <p className="text-3xl flex">{description} <MdDescription></MdDescription></p>
            <p className="text-red-600 flex">{priceRange} <IoPricetagOutline></IoPricetagOutline></p>
            <p className="text-3xl flex gap-2">Agent: {agent.name}<FaLaptopHouse></FaLaptopHouse></p>
           
            <button onClick={handleAddToList} className="bg-orange-400 btn text-white ">Add To WishList <TbJewishStar></TbJewishStar></button>
            <button  className=" ">
            <button className="btn bg-orange-400  text-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>Review<GoCodeReview></GoCodeReview> </button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">......Review This.....</h3>
    
    <div className="modal-action flex flex-col justify-center items-center">
      <form onSubmit={handleReview}>
      <div className="">
                
                <div className="form-control md:w-full items-center">
                    <label className="label">
                        <span className="label-text">Review 1 to 5</span>
                    </label>
                    <label className="input-group w-full">
                        <input type="number" name="rating" placeholder=""  className="input input-bordered w-full" />
                    </label>
                    <input type="submit" value="Request" className="btn btn-block bg-amber-400 text-white" />
                </div>
                
</div>
        {/* if there is a button in form, it will close the modal */}
       
      </form>
      <div className="modal-action align-middle">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-amber-400">Close</button>
      </form>
    </div>
    </div>
  </div>
</dialog></button>
 
 <div>
  <Review></Review>
 </div>
        </div>
    );
};

export default PropertyDetails;
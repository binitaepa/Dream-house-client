import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";


const UseWishList = () => {
    const axiosSecure=UseAxiosSecure();
    const {user}=UseAuth();

    const {refetch,data: wishlist = []}=useQuery({
queryKey:['wishlist',user?.email],
queryFn: async () =>{
    const res =await axiosSecure .get(`/wishlist?email=${user.email}`)
    return res.data;
}
    });
    return [wishlist,refetch]
};

export default UseWishList;
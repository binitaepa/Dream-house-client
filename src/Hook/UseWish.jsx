import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";


const UseWish = () => {
    const axiosSecure=UseAxiosSecure();
    const {user}=UseAuth();

    const {refetch,data: wish = []}=useQuery({
queryKey:['wish',user?.email],
queryFn: async () =>{
    const res =await axiosSecure .get(`/wish?email=${user.email}`)
    return res.data;
}
    });
    return [wish,refetch]
};

export default UseWish;
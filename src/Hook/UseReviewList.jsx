import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";


const UseReviewList = () => {
    const axiosSecure=UseAxiosSecure();
    const {user}=UseAuth();

    const {refetch,data: ratelist = []}=useQuery({
queryKey:['ratelist',user?.email],
queryFn: async () =>{
    const res =await axiosSecure .get(`/ratelist?email=${user.email}`)
    return res.data;
}
    });
    return [ratelist,refetch]
};

export default UseReviewList;
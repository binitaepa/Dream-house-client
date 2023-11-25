import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";


const UseProperty = () => {
    const axiosPublic = UseAxiosPublic();
    const {data: menu = [], isPending: loading, refetch} = useQuery({
        queryKey: ['properties'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/properties');
            return res.data;
        }
    })


    return [menu, loading, refetch]
};

export default UseProperty;
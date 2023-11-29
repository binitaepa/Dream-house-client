import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";


const UseAgent = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const { data: isAgent, isPending: isAgentLoading } = useQuery({
        queryKey: [user?.email, 'isAgent'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/agent/${user.email}`);
            console.log(res.data.agent);
            return res.data?.agent;
        }
    })
    return [isAgent, isAgentLoading]
   
};

export default UseAgent;
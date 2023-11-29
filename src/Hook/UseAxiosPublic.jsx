import axios from "axios";


const axiosPublic=axios.create({
    baseURL:'https://dream-house-project-server.vercel.app'
})

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;
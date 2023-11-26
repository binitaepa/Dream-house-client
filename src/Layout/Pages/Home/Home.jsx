import { Link } from "react-router-dom";
import Advertisement from "./Advertisement/Advertisement";
import Agents from "./Agents/Agents";
import Banner from "./Banner/Banner";
import Review from "./Review/Review";
import Marque from "./Marque/Marque";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Marque></Marque>
            <Advertisement></Advertisement>
            <Review></Review>
            <Agents></Agents>
           <div className="mt-10 text-center"> <Link to='/login'><p>Become an agent and get the commission you deserve.

<span className=" text-xl text-orange-400">Contact us</span></p></Link></div>
        </div>
    );
};

export default Home;
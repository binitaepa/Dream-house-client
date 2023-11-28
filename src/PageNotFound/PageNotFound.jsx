import { Link } from 'react-router-dom';
import img from '../assets/undraw_Page_not_found_re_e9o6.png'

const PageNotFound = () => {
    return (
        <div className=' flex items-center justify-center flex-col'>
            <img src={img} alt="" />
            <Link to='/'><h2 className='btn bg-red-600 text-white mt-5'> GO BACK</h2></Link>
        </div>
    );
};

export default PageNotFound;
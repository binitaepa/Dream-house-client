import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { VscSymbolProperty } from "react-icons/vsc";
import { MdDashboard } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";

import logo from '../../../assets/home-logo-and-symbols-vector-removebg-preview.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaShoppingCart } from "react-icons/fa";
import UseWish from "../../../Hook/UseWish";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
const [wish]=UseWish()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navOptions = <>
    <li><Link to="/"><IoMdHome></IoMdHome>Home</Link></li>
    <li><Link to="/allproperties"><VscSymbolProperty></VscSymbolProperty>All Properties</Link></li>
    
    <li>
        <Link to="/dashboard">
          <MdDashboard></MdDashboard> Dashboard
        </Link>
    </li>
    <Link to="/dashboard/cart">
                <button className="btn">
                    <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-secondary">+{wish.length}</div>
                </button>
            </Link>
           
      
</>
    return (
        <div>
           <div className="navbar  max-w-screen-xl bg-gray-200 text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                   <div className="flex">
                   <img className="w-[80px]" src={logo} alt="" />
                    <p className="text-xl mt-5 text-orange-400 font-bold">Dream House</p>
                   </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                {
            user ? <>
                <span className="mt-2">{user?.displayName}</span>
                <button onClick={handleLogOut} className="btn btn-ghost mb-4">LogOut<IoMdLogIn></IoMdLogIn></button>
            </> : <>
                <li ><Link to="/login">Login</Link></li>
            </>
        }
        
                </div> */}
                 <div className="navbar-end">
    
    {
                      user ?
                          <>
                          <details className="collapse ">
    <summary className="collapse-title "><div className=" ">
    <span className="bg-orange-300 btn">{user?.displayName}</span>
  
  </div></summary>
    <div className="collapse-content"> 
    <div className="flex flex-col">
  
  <button onClick={handleLogOut} className="btn  bg-amber-500 text-white btn-warning  ">Log Out</button>
  {/* {user?.displayName && <p> {user.displayName}</p>} */}
  <p className="md:w-[200px] text-amber-400 font-extrabold ml-7">{user.email}</p>
  </div>
    </div>
  </details>
                          
                  
                          </>
                          :
                          <Link to='/login'><button className="btn bg-amber-500 text-white btn-warning">Login<IoMdLogIn></IoMdLogIn></button></Link>
                  }
    
    </div>
            </div>
        </div>
    );
};

export default Navbar;
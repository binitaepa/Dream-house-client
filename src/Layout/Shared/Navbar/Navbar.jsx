import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { VscSymbolProperty } from "react-icons/vsc";
import { MdDashboard } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { MdSell } from "react-icons/md";
import logo from '../../../assets/home-logo-and-symbols-vector-removebg-preview.png'


const Navbar = () => {
    const navOptions = <>
    <li><Link to="/"><IoMdHome></IoMdHome>Home</Link></li>
    <li><Link to="/properties"><VscSymbolProperty></VscSymbolProperty>All Properties</Link></li>
    
    <li>
        <Link to="/dashboard">
          <MdDashboard></MdDashboard> Dashboard
        </Link>
    </li>
   
            <li><Link to="/login"><IoMdLogIn></IoMdLogIn>Login/Register</Link></li>
      
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
                <div className="navbar-end">
                    <a className="btn bg-orange-400"><MdSell></MdSell>Sell Property</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
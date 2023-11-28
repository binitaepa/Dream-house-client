
import { NavLink, Outlet } from 'react-router-dom';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList,  FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import USeAdmin from '../../Hook/UseAdmin';

const Dashboard = () => {
    const [isAdmin]=USeAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
               {
                isAdmin ? <>
                     <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                
                </>:<>
                     <li>
                        <NavLink to="/dashboard/myprofile">
                            <FaHome></FaHome>
                            My Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/wish">
                            <FaCalendar></FaCalendar>
                            Wishlist</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/propertybought">
                            <FaShoppingCart></FaShoppingCart>
                            Property Bought </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reviewrate">
                            <FaAd></FaAd>
                            My Review</NavLink>
                    </li>
                   </>
               }
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                   
                    <li>
                        <NavLink to="/dashboard/contact">
                            <FaEnvelope></FaEnvelope>

                            
                            Contact</NavLink>
                    </li>
                </ul>
            </div>

            <div className="flex-1 P-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;

import { NavLink, Outlet } from 'react-router-dom';
import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList,  FaShoppingCart, FaUsers } from "react-icons/fa";
// import USeAdmin from '../../Hook/UseAdmin';

const Dashboard = () => {
    // const [isAdmin]=USeAdmin();
    const isAdmin=true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
               {
                isAdmin ? <>
                     <li>
                                <NavLink to="/dashboard/adminprofile">
                                    <FaHome></FaHome>
                                    Admin Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/mangeproperties">
                                <FaShoppingCart></FaShoppingCart>
                                    Manage Property</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageReview">
                                    <FaList></FaList>
                                    Manage Review</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    Manage Users</NavLink>
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

               {/* sharednavlink */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                   
                    <li>
                        <NavLink to="/">
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
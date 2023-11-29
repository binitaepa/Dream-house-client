
import { NavLink, Outlet } from 'react-router-dom';
import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList,  FaShoppingCart, FaUsers } from "react-icons/fa";
import USeAdmin from '../../Hook/UseAdmin';
import UseAgent from '../../Hook/UseAgent';
// import UseAgent from '../../Hook/UseAgent';
// import USeAdmin from '../../Hook/UseAdmin';

const Dashboard = () => {
     const [isAdmin]=USeAdmin();
       const [isAgent]=UseAgent();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
               {
                isAdmin ? <>
                     <li>
                                <NavLink to="/dashboard/myprofile">
                                    <FaHome></FaHome>
                                    Admin Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/propertybought">
                                <FaShoppingCart></FaShoppingCart>
                                    Manage Property</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reviewrate">
                                    <FaList></FaList>
                                    Manage Review</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    Manage Users</NavLink>
                            </li>
                
                </>:
                isAgent ? <>
                <li>
                                <NavLink to="/dashboard/myprofile">
                                    <FaHome></FaHome>
                                    Agent Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/mangeproperties">
                                <FaShoppingCart></FaShoppingCart>
                                    Agent Property</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reviewrate">
                                    <FaList></FaList>
                                    My Added Properties</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/dashboard">
                                    <FaUsers></FaUsers>
                                    My Sold Properties</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard">
                                    <FaUsers></FaUsers>
                                    Requested Properties</NavLink>
                            </li>
                
                </>
                :<>
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
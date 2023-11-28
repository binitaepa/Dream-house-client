import { Navigate, useLocation } from "react-router-dom";
import USeAdmin from "../Hook/UseAdmin";
import UseAuth from "../Hook/UseAuth";


const AdminRoute = ({children}) => {
    const { user, loading } = UseAuth();
    const [isAdmin, isAdminLoading] = USeAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;
import UseAuth from "../../Hook/UseAuth";
import img from '../../assets/undraw_My_documents_re_13dc.png'

const MyProfile = () => {
    const {user}=UseAuth()
    return (
        <div>
            <div className="flex flex-col bg-pink-200 gap-10 w-full mt-5 items-center text-2xl justify-center">
            <h2>My Name: {user.displayName}</h2>
            <h2>My email: {user.email}</h2>
            <img src={img} alt="" />
            </div>
        </div>
    );
};

export default MyProfile;
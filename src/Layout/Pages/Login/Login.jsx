import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";

import img from '../../../assets/undraw_Sign_up_n6im.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
const Login = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                
                if(result){
                    Swal.fire({
                        title: 'User Login Successful.',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });
                }
                else{
                    setSuccess('Please verify your email address.')
                }
               
                navigate(from, { replace: true });
            })
            .catch(error=>{
                console.error(error)
            setRegisterError(error.message);
        }
        )
    }
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-amber-200">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        {
                            registerError && <p className="text-red-700">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-600">{success}</p>
                        }
                        <p className='my-4 text-center'>New here? <Link className='text-orange-600 font-bold' to="/signup">Register Now</Link> </p>

                        <div className='p-4 space-y-3 mb-6'>
                        <h2 className="text-3xl items-center flex justify-center">Or</h2>
            <h2 className="text-3xl flex justify-center items-center">Login With</h2>
                <button  className="btn btn-outline w-full text-white bg-amber-500">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                
            </div>










</div>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;
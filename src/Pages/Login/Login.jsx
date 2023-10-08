import React, { useContext } from 'react';
import Lottie from "lottie-react";
import reader from "../../../../../../milestone-11/Assaignment-11/wonder-toy-client/public/login.json";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../../../../../../milestone-11/Assaignment-11/wonder-toy-client/src/Pages/SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import useTitle from '../../../../../../milestone-11/Assaignment-11/wonder-toy-client/src/hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const { signinUser } = useContext(AuthContext);

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (email, password)
            signinUser(email, password)
                .then(result => {
                    const loggedUser = result.user;
                    toast.success('successfully login')
                    form.reset()
                    navigate(from, {replace:true})
                })
                .catch(error => {
                    toast.error(error.message)
                })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn}>
                            <div className="card-body">
                                <h1 className='text-3xl text-primary'>Please Login!</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <p className='text-center pt-4'>Don't have an account? <Link to='/register' className='text-primary'>Register</Link></p>

                                <div className='text-center'>
                                    <SocialLogin from={from}></SocialLogin>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="text-center lg:text-left w-2/4">
                        <Lottie animationData={reader} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
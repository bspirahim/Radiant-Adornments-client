import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navItems = <>
        <li><Link to='/'>Home</Link> </li>
        <li><Link to='alltoys'>All Jewelry</Link> </li>
        <li><Link to='blog'>Blog</Link> </li>
        {
            user ? <>
                <li><Link to='mytoys'>My Jewelry</Link> </li>
                <li><Link to='addtoy'>Add Jewelry</Link> </li>
            </>
                : ''

        }

    </>

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('Logged Out')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div className="md:px-20 navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img className='h-[50px]' src="/wonder-toy-logo.png" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center">

                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>

                            <div className='flex items-center'>
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <img src={user?.photoURL ? user.photoURL : "/photoGallery/profile.png"} className='w-12 mr-4 rounded-full' alt="" />
                                </div>

                                <button onClick={handleSignOut} className="btn btn-outline btn-primary px-5">Logout</button>
                            </div>

                        </>
                        :
                        <Link to='login'>
                            <button className="btn btn-outline btn-primary px-5">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Header;
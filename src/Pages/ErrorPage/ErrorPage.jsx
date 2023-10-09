import React from 'react';
import Lottie from "lottie-react";
import reader from "../../../public/error-page.json";
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
    return (
        <div className='w-1/3 mx-auto text-center text-lg'>
           <Lottie  animationData={reader} loop={true} />
           <Link to='/' className='text-primary '>Go back to home</Link>
        </div>
    );
};

export default ErrorPage;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const singleProduct = useLoaderData();
    const { category, price, email, details, jewellaryName, quantity, sellerName, img } = singleProduct;

    console.log(singleProduct)


    return (
        <div>
            <div className="relative w-full">
                <img src='/banner/mytoy-banner.jpg' className="w-full" />
                <div className="absolute w-full h-full flex items-center left-0 bottom-0 bg-[rgba(0,0,0,0.4)]">
                    <div className='text-white w-2/4 mx-auto text-center space-y-7 '>
                        <h2 className='text-5xl'>{jewellaryName}</h2>
                    </div>
                </div>
            </div>

            <div className='md:px-20 my-12 mx-auto'>
                <div className="card lg:card-side bg-base-200 shadow-lg">
                    <figure><img src={img} style={{ width: '400px' }} className='ml-7 my-10 rounded-xl' alt="Album" /></figure>
                    <div className="card-body lg:w-2/4">
                        <p><span className='font-bold'>Seller Name</span>: {sellerName} </p>
                        <p><span className='font-bold'>Seller Email</span>: {email} </p>
                        <p><span className='font-bold'>Category: </span>: {category} </p>
                        <p><span className='font-bold'>Available Quantity: </span>: {quantity} </p>
                        <p><span className='font-bold'>Price: </span>: {price} </p>
                        <p><span className='font-bold'>Details: </span>: {details} </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewDetails;
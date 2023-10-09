import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const singleProduct = useLoaderData();
    const { category, price, email, details, jewellaryName, quantity, sellerName, img } = singleProduct;

    console.log(singleProduct)


    return (
        <div>

            <h2 className='text-5xl text-center mt-4'>{jewellaryName}</h2>


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
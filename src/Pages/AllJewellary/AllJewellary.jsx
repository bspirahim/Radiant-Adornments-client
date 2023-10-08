import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import AllJewellaryTable from './AllJewellaryTable';

const AllJewellary = () => {
    useTitle('All Jewellary')
    const jewellarys = useLoaderData();
    console.log(jewellarys);

    return (
       <>
         <div className='md:px-20'>
            <div className="relative w-full">
                <img src='/banner/mytoy-banner.jpg' className="w-full" />
                <div className="absolute w-full h-full flex items-center left-0 bottom-0 bg-[rgba(0,0,0,0.4)]">
                    <div className='text-white w-2/4 mx-auto text-center space-y-7 '>
                        <h2 className='text-5xl'>Total jewellarys - {jewellarys.length}</h2>
                    </div>
                </div>
            </div>


            <div className="overflow-x-auto w-full my-12">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Photo</th>
                            <th>Seller Name</th>
                            <th>Jewellary Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>

                    {
                        jewellarys.map(jewellary => <AllJewellaryTable
                         key={jewellary._id}
                         jewellary={jewellary}
                        >

                        </AllJewellaryTable>)
                    }

                </table>
            </div>
        </div>
       </>
    );
};

export default AllJewellary;
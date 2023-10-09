import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import MyJewellaryTable from './MyJewellaryTable';
import { AuthContext } from '../../Provider/AuthProvider';

const MyJewellary = () => {
    useTitle('My Jewellary')
    const { user } = useContext(AuthContext);
    const [jewellarys, setJewellarys] = useState([])

    const reloadjewellarys = () => {
        if(user){
        fetch(`https://radiant-adornaments-server.vercel.app/my-jewellarys?email=${user?.email}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setJewellarys(res);
            });
        }
    }

    useEffect(reloadjewellarys, [user]);

    return (
        <>
            <div className='md:px-20'>
                <h2 className='text-5xl text-center mt-4'>My jewellarys - {jewellarys.length}</h2>

                <div className="overflow-x-auto w-full my-12">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Jewellary Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Details</th>
                            </tr>
                        </thead>

                        {
                           jewellarys.length>0 && jewellarys.map(jewellary => <MyJewellaryTable
                                key={jewellary._id}
                                jewellary={jewellary}
                            ></MyJewellaryTable>)
                        }

                    </table>
                </div>
            </div >
        </>
    );
};

export default MyJewellary;
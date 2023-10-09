
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyJewellaryTable from './MyJewellaryTable';

const MyJewellary = () => {
    const { user } = useContext(AuthContext)
    const [myJewellarys, setMyJewellarys] = useState([])

    const url = `http://localhost:5000/jewellarys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyJewellarys(data))
    }, []);

    console.log(myJewellarys)

    return (
        <div className='md:px-20'>
            <div className="relative w-full">
                <img src='/banner/mytoy-banner.jpg' className="w-full" />
                <div className="absolute w-full h-full flex items-center left-0 bottom-0 bg-[rgba(0,0,0,0.4)]">
                    <div className='text-white w-2/4 mx-auto text-center space-y-7 '>
                        <h2 className='text-5xl'>My Jewellarys - {myJewellarys.length}</h2>
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
                            <th>Jewellary Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                        </tr>
                    </thead>

                    {
                        myJewellarys.map(jewellary => <MyJewellaryTable
                            key={jewellary._id}
                            jewellary={jewellary}
                        >

                        </MyJewellaryTable>)
                    }

                </table>
            </div>
        </div>
    
    );
};

export default MyJewellary;
import React from 'react';
import useTitle from '../../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';
import Product from '../../Shared/Card/Product';

const AllJewellary = () => {
    const jewellarys = useLoaderData();
    useTitle('All Jewellary')
    return <>
        <h2 className='text-5xl text-center my-8'>All Jewellarys</h2>
        <div class="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-4 md:px-20 my-8">{
            jewellarys.length > 0 && jewellarys.map(jewellary => <Product
                key={jewellary._id}
                jewellary={jewellary}
            ></Product>)
        }</div></>;
};

export default AllJewellary;
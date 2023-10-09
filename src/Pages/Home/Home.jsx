import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Product from '../../Shared/Card/Product';

const Home = () => {
    const jewellarys = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            
            <h2 className='text-5xl text-center my-8'>Jewellarys</h2>
            <div class="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 md:px-20 my-8">{
                jewellarys.length > 0 && jewellarys.map(jewellary => <Product
                    key={jewellary._id}
                    jewellary={jewellary}
                ></Product>)
            }</div>

        </div>
    );
};

export default Home;
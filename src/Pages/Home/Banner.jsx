import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (<div className='max-h-screen'>
        <div className="relative w-full">
            <img src='/slideshow1-2.jpg' className="w-full" />
            <div className="absolute h-full flex items-center right-0 bottom-0">
                <div className='space-y-7 pr-20 ml-16 text-left'>
                    <div className='flex'>
                        <div className='text-5xl font-bold'>Diamonds<br />Jewellary Collection
                        </div>
                    </div>
                    <p className='text-2xl font-bold'>Shukra Yogam & Silver Power Silver Saving Schemes.</p>
                    <button>
                        <Link to={'/jewellarys'}><button class="primary-btn">SHOP NOW</button></Link>
                    </button>
                </div>
            </div>
        </div>
    </div >
    );
};

export default Banner;
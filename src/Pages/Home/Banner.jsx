import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (<div className='max-h-screen'>
        <div className="relative w-full">
            <img src='/slideshow1-2.jpg' className="w-full" />
            <div className="absolute h-full flex items-center right-2 bottom-0">
                <div className='lg:space-y-7  lg:mr-16 lg:pr-5   text-right'>
                    <div className=''>
                        <div className='lg:text-5xl md:text-xl font-bold '>Diamonds<br />Jewellary Collection
                        </div>
                    </div>
                    <p className='lg:text-2xl md:xl font-bold lg:block hidden'>Shukra Yogam & Silver Power Silver Saving Schemes.</p>
                    <button>
                        <Link to={'/jewellarys'}><button className="primary-btn">SHOP NOW</button></Link>
                    </button>
                </div>
            </div>
        </div>
    </div >
    );
};

export default Banner;
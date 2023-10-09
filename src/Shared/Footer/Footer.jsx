import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#212529]'>
            <div style={{ padding: "2rem" }} className='text-white flex justify-between mx-auto p-12'>
                <div>
                    <h1>Copyright © 2023 <span className='text-primary'>Radiant Adornments</span>. All Rights Reserved.</h1>
                </div>
                <div>
                    <p>Terms & Policy |  Disclaimer</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
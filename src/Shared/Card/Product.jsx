import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ jewellary }) => {
    const { _id, category, price, jewellaryName, quantity, sellerName, img } = jewellary;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {jewellaryName}
                </h2>
                <div className="card-actions">
                    <div className="badge badge-secondary">${price}</div>
                    <div className="badge badge-outline">{category}</div>
                </div>
                <div className="card-actions">
                <Link to={`/jewellary/${_id}`}><button className="btn btn-primary btn-md mt-4">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
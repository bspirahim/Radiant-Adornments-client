
import { Link } from 'react-router-dom';

const MyJewellaryTable = ({ jewellary }) => {
    const { _id, category, price, jewellaryName, quantity, sellerName, img } = jewellary;
    return (
        <tbody>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-20 h-20">
                                <img src={img} />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <p>{jewellaryName}</p>
                </td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td> <Link to={`/jewellary/${_id}`}><button className='btn btn-primary btn-sm'>View Details</button></Link> </td>
            </tr>
        </tbody>
    );
};

export default MyJewellaryTable;
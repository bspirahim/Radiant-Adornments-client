import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const AddJewellary = () => {
    useTitle('Add Jewellary')
    const { user } = useContext(AuthContext);

    const handleAddJewellary = event => {
        event.preventDefault()

        const form = event.target;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const jewellaryName = form.jewellaryName.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const rating = form.rating.value;
        const img = form.photo.value;

        const AddJewellary = {
            sellerName,
            email,
            jewellaryName: jewellaryName,
            category: category,
            price: price,
            quantity: quantity,
            details,
            rating,
            img
        }
        console.log(AddJewellary);

        fetch('http://localhost:5000/jewellarys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddJewellary)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Success',
                        text: 'Successfully added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                    form.reset();
                }
            })
    }



    return (
        <div className='mt-10 mb-20 container mx-auto w-3/4'>
            <h1 className='text-center text-3xl my-5 font-bold'>Add Jewellary</h1>
            <form onSubmit={handleAddJewellary}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name='sellerName' className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Jewellary Name</span>
                        </label>
                        <input type="text" name='jewellaryName' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name='category' className="input input-bordered" required>
                            <option value=""></option>
                            <option value="gold">Gold</option>
                            <option value="silver">Silver</option>
                            <option value="diamond">Diamond</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='photo' className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail Description</span>
                    </label>
                    <textarea type="text" name='details' className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className='btn btn-primary' value="Add Jewellary" />
                </div>
            </form>
        </div>
    );
};

export default AddJewellary;
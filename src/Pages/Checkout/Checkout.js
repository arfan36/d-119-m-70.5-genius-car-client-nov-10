import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const service = useLoaderData();
    const { _id, title, price } = service;
    const { user } = useContext(AuthContext);

    const handlePlaceHolder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregister';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        };

        // if (phone.length < 10) {
        //     alert('Phone number should be 10 characters or longer');
        // }
        // else{

        // }

        fetch(`http://localhost:5000/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Order placed successfully');
                    form.reset();
                }
            })
            .catch(err => console.error('err', err));
    };

    return (
        <div>
            <form onSubmit={handlePlaceHolder}>
                <h2 className='text-4xl'>You are about to order: <span className='font-bold'>{title}</span></h2>
                <h4 className='text-3xl'>Price: ${price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost input-bordered w-full" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost input-bordered w-full" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost input-bordered w-full" required />
                    <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-ghost input-bordered w-full" />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
                <input className='btn' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default Checkout;
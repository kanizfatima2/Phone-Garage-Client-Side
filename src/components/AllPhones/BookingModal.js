
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Authentication/Context/AuthProvider';

const BookingModal = ({ phone }) => {
    const { user } = useContext(AuthContext);
    const { model, resalePrice } = phone;

    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target;
        const model = form.model.value;
        const price = form.price.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;


        const booking = {
            Model: model,
            price,
            BuyerName: name,
            email,
            phone,
            location

        }
        console.log(booking)

        fetch(`http://localhost:5000/phonebookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {

                    toast.success(data.message)

                }
                else {
                    toast.error(data.message)
                }
            })



    }

    console.log(phone)
    return (
        <div>
            <input type="checkbox" id={phone._id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={phone._id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{model}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='model' type="text" defaultValue={model} disabled placeholder="Model Name" className="input input-bordered w-full" required />
                        <input name='price' type="text" defaultValue={resalePrice} disabled placeholder="Price" className="input input-bordered w-full" required />

                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered w-full" required />

                        <input name='email' type="text" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full" required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <input name='location' type="text" placeholder="Location" className="input input-bordered w-full" required />
                        <br />
                        <input className="btn btn-base w-full" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
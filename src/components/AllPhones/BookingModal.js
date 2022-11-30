
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Authentication/Context/AuthProvider';

const BookingModal = ({ allPhonesData, setAllPhonesData }) => {
    const { user } = useContext(AuthContext);

    // console.log(model, price)
    console.log(allPhonesData)
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold"></h3>
                    <form className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='model' type="text" disabled placeholder="Model Name" className="input input-bordered w-full" required />
                        <input name='price' type="text" disabled placeholder="Price" className="input input-bordered w-full" required />

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
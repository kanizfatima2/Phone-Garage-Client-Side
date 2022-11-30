import React from 'react';
import BookingModal from './BookingModal';


const AllPhonesDetails = ({ phone }) => {
    // console.log(phone)
    const { img, model, location, resalePrice, orginalPrice, yearsOfUse, condition, sellerName, sellerNumber, postingDate } = phone;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl h-full">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">

                    <div className='flex justify-between'>
                        <h2 className="card-title">{model}</h2>
                        <div>
                            <small className='font-semibold'>{postingDate}</small>
                            <p className='font-bold text-orange-600 text-xl'>$ {resalePrice}</p>
                        </div>
                    </div>

                    <p>Location: {location} </p>
                    <p>Orginal Price: <span className='font-bold'>{orginalPrice}</span></p>
                    <p> Years of Use: <span className='font-bold'>{yearsOfUse}</span> </p>
                    <p> Condition: <span className='font-bold'>{condition}</span></p>
                    <p>Seller Name: {sellerName}</p>
                    <p>Mobile Number: {sellerNumber}</p>


                    <div className="card-actions justify-end">

                        <label htmlFor={phone._id} className="btn btn-info bg-gradient-to-r from-cyan-600 to-info">Book Now</label>

                    </div>
                    <BookingModal phone={phone}></BookingModal>
                </div>
            </div>


        </div>
    );
};

export default AllPhonesDetails;
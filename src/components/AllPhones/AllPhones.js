import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllPhonesDetails from './AllPhonesDetails';
import BookingModal from './BookingModal';


const AllPhones = () => {

    const allPhones = useLoaderData();
    const [allPhonesData, setAllPhonesData] = useState({})
    // console.log(allPhones)
    console.log(allPhonesData)
    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-orange-600 mt-12'>All Phones</h2>
            <div className='grid md:grid-cols-2  gap-6 my-16 mx-auto '>
                {
                    allPhones?.map(phone => <AllPhonesDetails key={phone._id} phone={phone} setAllPhonesData={setAllPhonesData} ></AllPhonesDetails>)
                }
            </div>
            <BookingModal allPhonesData={allPhonesData} setAllPhonesData={setAllPhonesData}></BookingModal>
        </div >
    );
};

export default AllPhones;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllPhonesDetails from './AllPhonesDetails';


const AllPhones = () => {

    const allPhones = useLoaderData();
    // console.log(allPhones)
    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-orange-600 mt-12'>All Phones</h2>
            <div className='grid md:grid-cols-2  gap-6 my-16 mx-auto '>
                {
                    allPhones?.map(phone => <AllPhonesDetails key={phone._id} phone={phone}></AllPhonesDetails>)
                }
            </div>
        </div >
    );
};

export default AllPhones;
import React from 'react';
import { Link } from 'react-router-dom';


const CategoriesDetails = ({ categories }) => {
    const { name, img, phone_id } = categories;
    return (

        <div className="shadow-xl rounded-md   text-black">
            <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide text-center">{name}</h2>
                    <p className="text-gray-900 text-center">Grab your Choice!</p>
                </div>
                <Link to={`/allPhones/${phone_id}`} type="button" className="flex items-center justify-center w-3/4 mx-auto p-3 font-semibold tracking-wide rounded-md btn-info bg-gradient-to-r from-cyan-600 to-info ">See All</Link>

            </div>
        </div>



    );
};

export default CategoriesDetails
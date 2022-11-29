import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CategoriesDetails from './CategoriesDetails';

const CategoriesItems = () => {
    const [category, setcategory] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
            .then(data => setcategory(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-orange-600 '>What are you looking for?</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                {
                    category?.map(c => <CategoriesDetails key={c._id} categories={c} ></CategoriesDetails>)
                }
            </div>
        </div>
    );
};

export default CategoriesItems;
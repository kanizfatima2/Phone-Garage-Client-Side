import React from 'react';

const CategoriesDetails = ({ categories }) => {
    const { name, img } = categories;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl h-5/6">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl w-full h-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Grab your Choice!</p>
                    <div className="card-actions">
                        <button className="btn btn-info bg-gradient-to-r from-cyan-800 to-info text-white">See Products</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesDetails;
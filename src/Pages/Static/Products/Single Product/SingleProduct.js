import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { _id, name, img, more, price } = product;
    return (
        <div>
            <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                        src={img}
                        alt="Product"
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-medium font-semibold text-gray-700">
                            <NavLink to={`/products/${_id}`}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {name}
                            </NavLink>
                        </h3>
                        <p className="mt-1 text-base text-gray-500">{more}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">&#2547;{price}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
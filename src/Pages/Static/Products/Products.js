import React, { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import SingleProduct from './Single Product/SingleProduct';

const Products = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/explore")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data);
    return (
        <>
            <Navigation />
            <div>
                <h1 className='text-center text-4xl font-bold mt-2'>Expolore our products</h1>
                <div className="m-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {
                        data.map(product => <SingleProduct key={product._id} product={product} />)
                    }
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Products;
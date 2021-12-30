import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../../../Book Slice/BookSlice';
import useAuth from '../../../../Hooks/useAuth';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';

const ProductDetail = () => {
    const { id } = useParams();
    console.log(id);
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/explore")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const productDetail = data.find(product => product._id == id)
    const dispatch = useDispatch();
    const { user } = useAuth()
    return (
        <>
            <Navigation />
            <div className="mt-13 md:flex py-12 items-center px-9">
                <img src={productDetail?.img} alt="Product" className='rounded-lg' />
                <div className='ml-5'>
                    <h1 className='text-3xl font-thin text-gray-700'>{productDetail?.name}</h1>
                    <p className='text-lg font-semibold'>{productDetail?.description}</p>
                    <div className="flex justify-between py-5">
                        <p className="text-base font-light">{productDetail?.price}</p>
                        <p className="text-base font-light">{productDetail?.more}</p>
                    </div>
                    <button onClick={() => {
                        productDetail.email = user.email
                        fetch('http://localhost:5000/cart', {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(productDetail)

                        })
                            .then(res => res.json())
                            .then(data => console.log(data))
                        dispatch(addToCart(productDetail))
                    }} className='px-9 py-2 bg-blue-400 text-gray-100 font-thin rounded-md'>Add to cart</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetail;
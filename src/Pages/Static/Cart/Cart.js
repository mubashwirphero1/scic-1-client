import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Cart = () => {
    const { user } = useAuth()
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/cart`)
            .then(res => res.json())
            .then(data => setCart(data))
    }, []);

    const userCart = cart.filter(product => user.email == product.email)
    return (
        <>
            <Navigation />
            <div className="mt-8 px-12">
                <ul role="list" className="my-6 divide-y divide-gray-200">
                    {userCart.map((product) => (
                        <li key={product.id} className="py-6 flex">
                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                <img
                                    src={product.img}
                                    alt="Image"
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>

                            <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            <h1>{product.name}</h1>
                                        </h3>
                                        <p className="ml-4">৳ {product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.more}</p>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">

                                    <div className="flex">
                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="border-t border-gray-200 py-6 px-4 sm:px-6 px-12">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Total Item</p>
                    <p>{userCart.length}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                    <button
                        className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                        Checkout
                    </button>
                </div>
                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                    <p>
                        or{' '}
                        <NavLink
                            to="/products"
                            className="text-indigo-600 font-medium hover:text-indigo-500"
                        >
                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                        </NavLink>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
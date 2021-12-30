import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Home from '../Static/Home/Home';
import ProductDetail from '../Static/Products/Product Detail/ProductDetail';

const PrivateRoute = () => {
    const { user } = useAuth()
    return user.email ? <ProductDetail /> : <Home />
};

export default PrivateRoute;
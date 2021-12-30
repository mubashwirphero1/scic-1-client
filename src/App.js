import React from 'react';
import './App.css';
import Home from './Pages/Static/Home/Home';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Products from './Pages/Static/Products/Products';
import ProductDetail from './Pages/Static/Products/Product Detail/ProductDetail';
import AuthProvider from './ContextAPI/AuthProvider';
import PrivateRoute from './Pages/Private/PrivateRoute';
import Cart from './Pages/Static/Cart/Cart';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route element={<PrivateRoute />}>
            <Route path="/products/:id" element={<ProductDetail />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

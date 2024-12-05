import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

const AppRouter = () => {
    return (

        <Routes>
            <Route path="/productRoutes" element={<Home />} />
            <Route path="/productRoutes/:id" element={<ProductDetails />} />
        </Routes>

    );
}

export default AppRouter;

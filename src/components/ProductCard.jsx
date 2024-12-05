import React from "react";
import '../styles/ProductCard.css';
import { Link } from 'react-router-dom';



const ProductCard = ({ product }) => {
    return (
        <Link to={`/productRoutes/${product._id}`} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <span>View Details</span>
        </Link>
    )
};

export default ProductCard;




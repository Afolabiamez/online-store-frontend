import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetails.css'

const ProductDetails = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch product details based on the ID
        axios.get(`/productRoutes/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error("Error fetching product details:", error);
            });
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price} Naira</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductDetails;

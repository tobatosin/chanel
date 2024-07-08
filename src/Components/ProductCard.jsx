// ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FcLikePlaceholder } from "react-icons/fc";

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.details}</p>
            <p className="price">{product.price}</p>
            <div className="rating">
                {'★'.repeat(product.rating)}
                {'☆'.repeat(5 - product.rating)}
                <span className="reviews">({product.reviews})</span>
            </div>
            <div className='cardiv'>
                <div className='d-flex gap-2'>
                    <i class="fa-regular fa-heart icon2"></i>
                    <p className=''><IoCartOutline className='icon1' /></p> 
                </div>
            <button className="buy-now">Buy Now</button>
            </div>
            
        </Link>
    );
}

export default ProductCard;

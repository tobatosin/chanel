// ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className='p-div'>
            <h4>{product.name}</h4>
            <p className='p-details'>{product.details}</p>
            <p className="price">Price: {product.price}</p>
            <div className="rating">
                {'★'.repeat(product.rating)}
                {'☆'.repeat(5 - product.rating)}
                <span className="reviews">({product.reviews})</span>
            </div>
            </div>
            
            <div className='cardiv container'>
                <div className='iconbox'>
                    <i class="fa-regular fa-heart icon1"></i>
                    <p className=''><MdOutlineShoppingCart className='icon2'/></p> 
                </div>
             <p className="buy-now">Buy Now</p>
            </div>
            
        </Link>
    );
}

export default ProductCard;
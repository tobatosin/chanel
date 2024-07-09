import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import NavDropdown from 'react-bootstrap/NavDropdown';

const ProductList = ({ products }) => {
    return (
        <div >
            <div className="container product-box">
               <h1 className="product">Products</h1>
                
            </div>
            <div className="product-list mb-5">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
        
    );
}

export default ProductList;

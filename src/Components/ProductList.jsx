import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import NavDropdown from 'react-bootstrap/NavDropdown';

const ProductList = ({ products }) => {
    return (
        <div >
            <div className="mt-3 pb-5 container fs-4 fw-bold">
               <p className="pt-5">Products</p>
               <div className="d-flex gap-3">
                    <div className="drop">
                        <NavDropdown title="All" id="collapsible-nav-dropdown" >
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    <div className="drop">
                        <NavDropdown title="Sort by" id="collapsible-nav-dropdown" >
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </div>
               </div>
               
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

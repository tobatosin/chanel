import React from 'react';
import { Container } from 'react-bootstrap';
import ProductList from '../Components/ProductList';
import products from '../Data/ProductData';
import { CiSearch } from "react-icons/ci";
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div>
            <Container fluid  className='home'>
                <Container className='d-flex justify-content-center align-items-center flex-column'>
                    <div>
                        <p className='text-light fw-bold fs-4'>What is life without a little spice?</p>
                        <p className='text-light text-center fw-bold'>Shop Chanel today!</p>
                    </div>
                    <div className='d-flex gap-3 mt-5'>
                    <div className='box'>
                        <a href=""> <CiSearch className='fw-bold fs-5' /></a>
                        <input type='search' placeholder='Search' />
                    </div>
                    <Button variant="outline-warning bg-warning text-light px-4">Search</Button>
                    </div>
                    
                    
                </Container>
            </Container>
            
            
            <Container>
            <ProductList products={products} />
            </Container>
        </div>
    );
}

export default Home;

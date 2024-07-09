import React from 'react';
import { Container } from 'react-bootstrap';
import ProductList from '../Components/ProductList';
import products from '../Data/ProductData';
 


const Home = () => {
    return (
        <div>
            <Container fluid  className='home'>
                <Container className='homecon'>
                    <div>
                        <h2 className='what'>What is life without a little spice?</h2>
                        <h4 className='shop'>Shop Chanel today!</h4>
                    </div>
                    <div class="search">
                        <div class="search-box-wrapper">
                            <i class="fa fa-search search-icon"></i>
                            <input type="search" placeholder="Search" class="searchbox" />
                        </div>
                        <button class="searchbut">Search</button>
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

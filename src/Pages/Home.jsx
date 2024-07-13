import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ProductList from '../Components/ProductList';
import products from '../Data/ProductData';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Container fluid className='home'>
        <Container className='homecon'>
          <div className="text-center"> {/* Center align content */}
            <h2 className='what'>What is life without a little spice?</h2>
            <h4 className='shop'>Shop Chanel today!</h4>
          </div>
          <div className="search d-flex justify-content-center"> {/* Center align search box */}
            <div className="search-box-wrapper">
              <i className="fa fa-search search-icon"></i>
              <input
                type="search"
                placeholder="Search"
                className="searchbox"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
            </div>
            <button className="searchbut">Search</button>
          </div>
        </Container>
      </Container>

      <Container>
        <ProductList products={filteredProducts} />
      </Container>
    </div>
  );
}

export default Home;

import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Sort by');

  const categories = ['All', 'Powder', 'Seasoning', 'Pepper']; // Updated categories
  const sortOptions = ['Sort by','Low prices', 'Newest'];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (option) => {
    setSelectedSort(option);
  };

  // Function to filter products based on category and name keywords
  const filterProducts = (product) => {
    if (selectedCategory !== 'All' && !product.name.toLowerCase().includes(selectedCategory.toLowerCase())) {
      return false;
    }
    return true;
  };

  // Apply sorting based on selected sort option
  const sortedProducts = [...products].sort((a, b) => {
    if (selectedSort === 'Price: Low to High') {
      return parseFloat(a.price) - parseFloat(b.price);
    } else if (selectedSort === 'Price: High to Low') {
      return parseFloat(b.price) - parseFloat(a.price);
    } else if (selectedSort === 'Newest') {
      return new Date(b.dateAdded) - new Date(a.dateAdded);
    }
    return 0; // Default case
  });

  // Filter and sort products
  const filteredAndSortedProducts = sortedProducts.filter(filterProducts);

  return (
    <div>
      <div className="container product-box">
        <h1 className="product">Products</h1>
      </div>

      <div className="dropdown-container">
        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-category">
            {selectedCategory}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {categories.map((category, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-sort">
            {selectedSort}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {sortOptions.map((option, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => handleSortChange(option)}
              >
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="product-list mb-5">
        {filteredAndSortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../Data/ProductData';
import { IoCartOutline } from "react-icons/io5";
import ProductCard from '../Components/ProductCard';
import { Carousel } from 'react-bootstrap';

const ProductPage = () => {
    const { id } = useParams();
    const product = products.find(product => product.id === id);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    console.log('Product:', product);
    console.log('Quantity:', quantity);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity + change));
    };

    const handleAddToCart = () => {
        console.log('Add to Cart clicked');
        navigate('/cart');
    };

    // Filter related products (example: products with similar names)
    const relatedProducts = products.filter(p => p.name.includes('Pepper') && p.id !== product.id);

    // Chunk related products into groups of 4 for each slide
    const chunkedRelatedProducts = [];
    for (let i = 0; i < relatedProducts.length; i += 4) {
        chunkedRelatedProducts.push(relatedProducts.slice(i, i + 4));
    }

    return (
        <div className="container product-page">
            <div className="product-detail">
                <div className='d-flex gap-3'>
                    <img src={product.image} alt={product.name} className="product-detail-image" />
                    <div className='d-flex flex-column gap-3'>
                        <img src={product.image} alt={product.name} className="product-detail-image2" />
                        <img src={product.image} alt={product.name} className="product-detail-image2" />
                    </div>
                </div>
                <div className="product-info">
                    <div className='productup'>
                        <h1>{product.name}</h1>
                        <p>{product.details}</p>
                        <div className="rating">
                            {'★'.repeat(product.rating)}
                            {'☆'.repeat(5 - product.rating)}
                            <span className='review'>({product.reviews})</span>
                        </div>
                        <h2 className="price">{product.price}</h2>
                    </div>
                    <div className='productdown'>
                        <div className='size'>
                            <div className='sizebut'>
                                <h4 className='psize'>Size</h4>
                                <div className='sizebutton'>
                                    <button className='buto'>100kg</button>
                                    <button className='butoo'>200kg</button>
                                </div>
                            </div>
                            <div>
                                <h4 className='psize'>Quantity</h4>
                                <div className='click'>
                                    <button className='but3' onClick={() => handleQuantityChange(-1)}>-</button>
                                    <span className='butext'>{quantity}</span>
                                    <button className='but4' onClick={() => handleQuantityChange(1)}>+</button>
                                </div>
                            </div>
                        </div>
                        <button className="add-to-cart" onClick={handleAddToCart}> <IoCartOutline className='' />Add to Cart</button>
                    </div>
                </div>
            </div>

            <div className='quantity-selector'></div>
            <div>
                <div className='overview'>
                    <a href="#" alt="" className='a'><span className='acolor'>Overview</span></a>
                    <a href="#" alt="" className='a'>Specification</a>
                    <a href="#" alt="" className='a'>Reviews</a>
                </div>
                <div className='text5'>
                    <p>Eating ginger can cut down fermentation, constipation and other causes of bloating and intestinal gas.<br /> Wear and tear on cells. Ginger contains antioxidants. These molecules help manage free radicals, which<br /> are compounds that can damage cells when their numbers grow too high.</p>
                    <p>Our products are planted, nurtured and harvested by us, so we guarantee pure organic ingredients that <br /> aren't adulterated in any way.</p>
                </div>
            </div>

            <div className='quantity-selector'></div>

            <div>
                <div>
                    <p className='text6'>Related Products</p>
                </div>
                <Carousel>
                    {chunkedRelatedProducts.map((productGroup, index) => (
                        <Carousel.Item key={index}>
                            <div className="d-flex justify-content-around">
                                {productGroup.map(relatedProduct => (
                                    <ProductCard key={relatedProduct.id} product={relatedProduct} />
                                ))}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default ProductPage;

// CartPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product1 from '../Images/Product1.png';
import { RiDeleteBin6Line } from "react-icons/ri";

const CartPage = () => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity + change));
    };

    const handleCheckout = () => {
        navigate('/checklist');
    };

    return (
        <div className="container">
            <div className='cart-page'>
                <h1 className="fw-bold">Cart (3)</h1>
                <button className="text7">Continue shopping</button>
            </div>
           
            <div className='d-flex gap-5'>
                <div>
                    <div className="text8 mt-5">
                        <p>PRODUCT</p>
                        <p>PRICE</p>
                        <p>QUANTITY</p>
                        <p>SUB-TOTAL</p>
                    </div> 

                    <div className='boxi'>
                        <div className='side1'>
                            <img src={Product1} className="product-detail-image3" />
                            <div className='text11'>
                                <p className='text9'>Ginger powder</p>
                                <p className='text0'>100g</p>
                            </div>
                        </div>
                        <div className='side2'>
                            <p className='text12'>$500</p>
                        </div>
                        <div className="">
                            <div className='quati d-flex align-items-center'>
                                <div className='d-flex gap-1 align-items-center'>
                                    <button className='but3 px-3' onClick={() => handleQuantityChange(-1)}>-</button>
                                    <span>{quantity}</span>
                                    <button className='but4 px-3 bg-warning text-light' onClick={() => handleQuantityChange(1)}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className='side3'>
                            <p className='text-dark'>$500</p>
                        </div>
                        <div className='side4'>
                            <a href='#' className='delete'><RiDeleteBin6Line  /></a>
                        </div>
                    </div>
                    <div className='boxi'>
                        <div className='side1'>
                            <img src={Product1} className="product-detail-image3" />
                            <div className='text11'>
                                <p className='text9'>Ginger powder</p>
                                <p className='text0'>100g</p>
                            </div>
                        </div>
                        <div className='side2'>
                            <p className='text12'>$500</p>
                        </div>
                        <div className="">
                            <div className='quati d-flex align-items-center'>
                                <div className='d-flex gap-1 align-items-center'>
                                    <button className='but3 px-3' onClick={() => handleQuantityChange(-1)}>-</button>
                                    <span>{quantity}</span>
                                    <button className='but4 px-3 bg-warning text-light' onClick={() => handleQuantityChange(1)}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className='side3'>
                            <p className='text-dark'>$500</p>
                        </div>
                        <div className='side4'>
                            <a href='#' className='delete'><RiDeleteBin6Line  /></a>
                        </div>
                    </div>
                    <div className='boxii'>
                        <div className='side1'>
                            <img src={Product1} className="product-detail-image3" />
                            <div className='text11'>
                                <p className='text9'>Ginger powder</p>
                                <p className='text0'>100g</p>
                            </div>
                        </div>
                        <div className='side2'>
                            <p className='text12'>$500</p>
                        </div>
                        <div className="">
                            <div className='quati d-flex align-items-center'>
                                <div className='d-flex gap-1 align-items-center'>
                                    <button className='but3 px-3' onClick={() => handleQuantityChange(-1)}>-</button>
                                    <span>{quantity}</span>
                                    <button className='but4 px-3 bg-warning text-light' onClick={() => handleQuantityChange(1)}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className='side3'>
                            <p className='text-dark'>$500</p>
                        </div>
                        <div className='side4'>
                            <a href='#' className='delete'><RiDeleteBin6Line  /></a>
                        </div>
                    </div>
                    
                </div>

                <div className="mt-4">
                    <div><p className='text13'>Order summary</p></div> 
                    <div className='summary'>
                        <div className="container">
                            <div className='sub'>
                                <p className="text16">Sub-total</p>
                                <p className="fw-bold">$1,500</p>
                            </div>
                            <div className="sub2">
                                <p className="text17">Shipping and tax are calculated at <br/> checkout</p>
                                <button className="but5" onClick={handleCheckout}>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;

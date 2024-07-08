// ChecklistPage.js
import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';


const ChecklistPage = () => {
    const navigate = useNavigate();
    const handleCheckout = () => {
        navigate('/checklist');
    };
    return (
        <div className="container">
            <div className='d-flex gap-5'>
                <div>
                    <p className='text19'>Delivery details</p>
                    <div className='d-flex gap-4'>
                        <div>
                            <p className='text18'>First Name</p>
                            <input type="text" placeholder='First name' className='input1'/>
                        </div>
                        <div>
                            <p className='text18'>Email address</p>
                            <input type="text" placeholder='johndoe@yahoo.com' className='input1'/>
                        </div>
                    </div>
                    <div className='d-flex gap-4'>
                        <div>
                            <p className='text18'>Last Name</p>
                            <input type="text" placeholder='First name' className='input1'/>
                        </div>
                        <div>
                            <p className='text18'>Phone Number</p>
                            <input type="text" placeholder='+234 8193...' className='input1'/>
                        </div>
                    </div>
                    <div className='d-flex gap-4'>
                        <div>
                            <p className='text18'>Company Name</p>
                            <input type="text" placeholder='Company name' className='input1'/>
                        </div>
                        <div>
                            <p className='text18'>Zip code</p>
                            <input type="text" placeholder='1100111' className='input1'/>
                        </div>
                    </div>
                    <div className='d-flex gap-4'>
                        <div>
                            <p className='text18'>Country</p>
                            <input type="text" placeholder='Niger' className='input1'/>
                        </div>
                        <div>
                            <p className='text18'>City</p>
                            <input type="text" placeholder='New York' className='input1'/>
                        </div>
                    </div>
                    <div>
                            <p className='text18'>Street Address</p>
                            <input type="text" placeholder='St,Johns street, ofada.' className='input2'/>
                        </div>
                </div>
                <div className="mt-4">
                    <div><p className='text13'>Order summary</p></div> 
                    <div className='summary'>
                        <div className="container">
                            <div className='sub5'>
                                <p className="text16">Sub-total</p>
                                <p className="fw-bold">$1,500</p>
                            </div>
                            <div className='sub3'>
                                <p className="text20">Deliver Fee</p>
                                <p className="text20">$50</p>
                            </div>
                            <div className='sub4'>
                                <p className="text20">VAT</p>
                                <p className="text20">$20</p>
                            </div>
                            <div className="butdiv">
                                {/* <p className="text17">Shipping and tax are calculated at <br/> checkout</p> */}
                                <button className="but6" onClick={handleCheckout}>Proceed to payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default ChecklistPage;

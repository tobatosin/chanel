import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo1 from "../../src/Images/Logo_new (1).png"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { RiFacebookCircleFill } from "react-icons/ri";
import { BiLogoInstagram } from "react-icons/bi";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <Container fluid className='footbg'>
                <Container className=' footsec'>
                    <div className='d-flex flex-column gap-3 '>
                        <div><img src={Logo1} alt="" className='pp ' /> </div> 
                        <div>
                            <p className='text-light text3'>Stay Updated! Suscribe to our newsletter</p>
                            <Form className="d-flex ">
                                    <Form.Control
                                    type="search"
                                    placeholder="Email address"
                                    className="me-2 text2 px-4"
                                    aria-label="Email"
                                    />
                                    <Button variant="outline-warning bg-warning text-light px-4">Suscribe</Button>
                            </Form>
                        </div>
                    </div>
                    <div className='text-light'>
                        <div><p className='fw-bold'> Quick Link</p></div>
                        <div className='line mt-4'>
                            <p>Home</p>
                            <p>Products</p>
                            <p>Export</p>
                        </div>

                    </div>
                    <div className='text-light'>
                        <div><p className='fw-bold'> About Us</p></div>
                        <div className='line mt-4'>
                            <p>About Us</p>
                            <p>Contact Us</p>
                            <p>Privacy Policy</p>
                            <p>Terms and Condition</p>
                        </div>

                    </div>
                    <div className='text-light'>
                        <div><p className='fw-bold'> Connect With Us</p></div>
                        <div className='line mt-4 d-flex gap-4'>
                            <p><RiFacebookCircleFill /></p>
                            <p><BiLogoInstagram /></p>
                            <p><FaTwitterSquare /></p>
                        </div>

                    </div>
                   
                    
                </Container>
                <Row>
                        <Col className="text-center py-3 text-light footlas pt-5">Copyright
                            &copy; {new Date().getFullYear()} Chanel food Limited
                        </Col>
                    </Row>
            </Container>
            
        </footer>
    );
}

export default Footer;

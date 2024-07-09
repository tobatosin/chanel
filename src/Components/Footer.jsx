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
                    <div className='footdiv '>
                        <div><img src={Logo1} alt="" className='pp ' /> </div> 
                        <div className=''>
                            <p className='text-light text3'>Stay Updated! Suscribe to our newsletter</p>
                            <Form className="formm ">
                                    <Form.Control
                                    type="search"
                                    placeholder="Email address"
                                    className="text-2"
                                    aria-label="Email"
                                    />
                                    <Button variant="outline-warning bg-warning text-light px-4 ">Suscribe</Button>
                            </Form>
                        </div>
                    </div>
                    
                    <div className='text-light'>
                        <div><p className='about'> Quick Link</p></div>
                        <div className='line '>
                            <p>Home</p>
                            <p>Products</p>
                            <p>Export</p>
                        </div>

                    </div>
                    <div className='text-light footco'>
                        <div><p className='about'> About Us</p></div>
                        <div className='line'>
                            <p>About Us</p>
                            <p>Contact Us</p>
                            <p>Privacy Policy</p>
                            <p>Terms and Condition</p>
                        </div>

                    </div>
                    <div className='text-light'>
                        <div><p className='about'> Connect With Us</p></div>
                        <div className='linelink'>
                            <p><RiFacebookCircleFill /></p>
                            <p><BiLogoInstagram /></p>
                            <p><FaTwitterSquare /></p>
                        </div>

                    </div>
                
                    
                   
                    
                </Container>
                    <Row className=''>
                        <Col className=" footlas text-light ">Copyright
                            &copy; {new Date().getFullYear()} Chanel food Limited
                        </Col>
                    </Row>
         </Container>
            
        </footer>
    );
}

export default Footer;

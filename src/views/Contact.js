import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
class Contact extends React.Component{
    render(){
        return(
           <div className='contact-wrapper' id="contact"
           >
               <Container className='contact-conatiner'>
                   
                            <div className='section-contact' id='section-contact'>
                                <Row>
                                    <Col md="5" sm="5">
                                        <div className='contact-getintouch'>
                                            <h3 className='getintouch-title'>Get In Touch</h3>
                                            <div className='contact-links'>
                                                <p>If you like my work and want to colaborate or like to contact me, you can ind me in these .
                                                </p>
                                                <span>
                                                    <a href="https://www.linkedin.com/in/bharadwajkr/"><i className="fa fa-linkedin-square fa-2x" ></i></a>
                                                </span>
                                                <span>
                                                    <a href="https://github.com/Bharadwaj07"><i className="fa  fa-github-square fa-2x"></i></a>
                                                </span>
                                                <span>
                                                    <a href='https://twitter.com/BharadwajKR5'><i className="fa fa-twitter-square fa-2x"></i></a>
                                                </span>
                                                <span>
                                                    <a href="https://www.facebook.com/yajamanbharadwaj.kr"><i className="fa fa-facebook-square fa-2x" ></i></a>
                                                </span>
                                                <span>
                                                    <a href="mailto:yajamankr@gmail.com"><i class="fa fa-envelope fa-2x"></i></a>
                                                </span>
                                            </div>
                                        </div> 
                                    </Col>
                                    <Col md="7" sm="7" className="contact-img">
                                        <img src={require("../assets/img/contact.jpg")} alt=""/>
                                    </Col>
                                </Row>      
                            </div>
                        
                           
                       
                  
                </Container>
           </div> 
        )
    }
}

export default Contact;
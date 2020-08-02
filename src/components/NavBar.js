import React, { Component } from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
 class NavBar extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" className="navbar"variant="dark" fixed="top" >
                    <Container>
                        <Navbar.Brand href="#home"><i class="fa fa-code fa-1x" aria-hidden="true"></i></Navbar.Brand>
                        <Navbar.Toggle variant="dark" className="toggle"/>
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Nav.Link href="#home" 
                                    onClick ={e =>{
                                        e.preventDefault();
                                        document
                                          .getElementById("home")
                                          .scrollIntoView()
                                      }}
                                >Home</Nav.Link>
                                <Nav.Link href="#about"
                                    onClick ={e =>{
                                        e.preventDefault();
                                        document
                                          .getElementById("about")
                                          .scrollIntoView()
                                      }}
                                >About</Nav.Link>
                                <Nav.Link href="#work"
                                    onClick ={e =>{
                                        e.preventDefault();
                                        document
                                          .getElementById("my-work")
                                          .scrollIntoView()
                                      }}
                                >Work</Nav.Link>
                                <Nav.Link href="#blogs">Blogs</Nav.Link>
                                <Nav.Link href="#contacts"
                                    onClick ={e =>{
                                        e.preventDefault();
                                        document
                                          .getElementById("contact")
                                          .scrollIntoView()
                                      }}
                                >Contacts</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}
export default NavBar;
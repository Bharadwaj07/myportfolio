import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import { Button } from 'react-bootstrap';

// var ReactRotatingText = require('react-rotating-text');


 class Header extends Component {
    constructor(props){
        super(props)
        this.pageHeader = React.createRef()
    }
    render() {
        return (
           
            <div className='page-header' id="home"
                style={{backgroundImage:`url(${require("../assets/img/undraw_version_control_9bpv.svg")})`}}
                    ref={this.pageHeader}
                ><NavBar/>
                
                    <div className='content-center'>
                        <h3 className='title'>Hello,This is Bharadwaj K R.</h3>
                        <h4>A passionate WebDeveloper</h4>

                        <Button className="downArrow"
                            onClick ={e =>{
                                e.preventDefault();
                                document
                                  .getElementById("about")
                                  .scrollIntoView()
                              }}
                        ><i class="fa fa-arrow-down" aria-hidden="true"></i></Button>

                        {/* <ReactRotatingText items={['FrontEnd Developer', 'BackEnd Developer', 'Software Engineer']} /> */}
                    </div>
                
                
            </div>
          
        )
    }
}

export default Header;

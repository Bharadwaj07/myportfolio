import React, { Component } from 'react';


var ReactRotatingText = require('react-rotating-text');


 class Header extends Component {
    constructor(props){
        super(props)
        this.pageHeader = React.createRef()
    }
    render() {
        return (
           
            <div className='page-header'>
                <div className='page-header-img'
                    style={{backgroundImage:`url(${require("../assets/img/bg3.jpg")})`}}
                    ref={this.pageHeader}
                > 
               
                    <div className='content-center'>
                        <h1 className='title'>Hello,This is Bharadwaj K R.</h1>
                        <ReactRotatingText items={['FrontEnd Developer', 'BackEnd Developer', 'Software Engineer']} />
                    </div>
                
                </div>
            </div>
          
        )
    }
}

export default Header;

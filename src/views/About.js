import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
// import skillsArray from './SkillsData';
class About extends React.Component{
    render(){
        // const skill = skillsArray.map(skill => {
        //     return (
        //         <div className='skill'>
        //             <span>{skill.name}</span>
        //             <span className='right'>{skill.percent}%</span>
        //              <ProgressBar now={skill.percent} style={{height:"7px"}}/>
        //         </div>  
        //     )
        // })
        return(
        
        <div className="about" id="about">
            
            <Container className="about-container">
                <div>
                    <Row>
                        <Col md="6" sm="6" className="about-content">
                            <div className="about-about">
                                <h2>About Me</h2>
                                <p>
                                    I'm Bharadwaj K R , a web developer and passionate about the trending techonolgies like react ,angular .
                                    Frankly I can say myself as a learner rather than a developer.I'm not perfect at anything but I want to be.
                             
                                </p>
                            </div>
                        </Col>
                        <Col md="6" sm="6" className="image-container">
                            <img 
                                className="about-img"
                                src={require('../assets/img/undraw_profile_6l1l.svg')}
                                alt=""></img>
                        </Col>
                    </Row>

                </div>


                <div>
                    <Row>
                        <Col md="6" sm="6" className="skillImage-container">
                            <img 
                                className="skill-img"
                                src={require('../assets/img/undraw_percentages_0rur.svg')}
                                alt=""></img>
                        </Col>
                        <Col md="6" sm="6" className="skills-content">
                            <h2>Skills</h2>
                            <div className="skills">
                                <div className="programminglang">
                                    <img src="https://img.icons8.com/color/48/000000/c-programming.png" alt=""/>
                                    <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt=""/>
                                    <img src="https://img.icons8.com/color/48/000000/python.png" alt=""/>
                                    <img src="https://img.icons8.com/color/48/000000/javascript.png" alt=""/>
                                    <img src="https://img.icons8.com/color/48/000000/typescript.png" alt=""/>
                                </div>
                                <div className="frameworks">
                                    <img src="https://img.icons8.com/plasticine/60/000000/react.png" alt=""/>
                                    <img src="https://img.icons8.com/color/60/000000/nodejs.png" alt=""/>
                                    <img src="https://img.icons8.com/color/60/000000/angularjs.png" alt=""/>
                                    <img src="https://img.icons8.com/color/60/000000/django.png" alt=""/>
                                </div>
                                <div className="database">
                                    <img src="https://img.icons8.com/color/60/000000/mongodb.png" alt=""/>
                                    <img src="https://img.icons8.com/ios/60/000000/mysql-logo.png" alt=""/>
                                    <img src="https://img.icons8.com/color/60/000000/firebase.png" alt=""/>
                                </div>  
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            
        </div>
        )
    }
}

export default About;
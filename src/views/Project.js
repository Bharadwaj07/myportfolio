import React from 'react';
import {Container,Row,Col,Carousel} from 'react-bootstrap';
// import myWork from './ProjectData';
class Project extends React.Component{
    render(){
        // const work = myWork.map(work =>{
        //     return(
        //         <Col md='4' className='work'>
        //             <Card style={{ width:'100%' }}>
        //                 <Card.Img variant="top" src={require(`../assets/img/${work.imgUrl}`)} />
        //                 <Card.Body>
        //                     <div className='project-details'>
        //                         <h5 className="project-title">{work.name}</h5>
        //                         <p className='project-desc'>{work.description}</p>
        //                     </div>
        //                     <div className="button">
        //                        <button className="github-btn"><i className="fa  fa-github-square fa-2x"/><h5>Source</h5></button>
        //                     </div>
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //     )
        // })
        return(
            <Container className='work-container' id="my-work">
                <div className='work-content'>
                    <div className='work-title'>
                        <h3>Portfolio</h3>
                        <h5>Check out my latest work</h5>
                    </div>
                    <div className='my-work'>
                        <Row>
                            <Col md='5' sm='5' xl="5" className="work-col">
                                    <div className="project">
                                        <div className="project-image">
                                            <Carousel>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={require("../assets/img/screenshots/moviedb1.png")}
                                                        alt="First slide"
                                                        />
                                                        <Carousel.Caption>
                                                        <h3>The MovieDb</h3>
                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={require("../assets/img/screenshots/moviedb1.png")}
                                                        alt="Third slide"
                                                        />

                                                        <Carousel.Caption>
                                                        <h3>The MovieDb</h3>
                                                
                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={require("../assets/img/screenshots/moviedb1.png")}
                                                        alt="Third slide"
                                                        />

                                                        <Carousel.Caption>
                                                        <h3>The MovieDb</h3>
                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                    </Carousel>
                                        </div>
                                        <div className="description">
                                        <h3>Title</h3>
                                            <p>
                                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                                            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.
                                            </p>
                                            <button><i class="fa fa-github" aria-hidden="true"></i> Source</button>
                                        </div>
                                    </div>

                            </Col>
                            <Col md='5' sm='5' xl="5" className="work-col">
                                    <div className="project">
                                        <div className="project-image">
                                            <Carousel>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={require("../assets/img/screenshots/moviedb1.png")}
                                                        alt="First slide"
                                                        />
                                                        <Carousel.Caption>
                                                        <h3>The MovieDb</h3>
                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={require("../assets/img/screenshots/moviedb1.png")}
                                                        alt="Third slide"
                                                        />

                                                        <Carousel.Caption>
                                                        <h3>The MovieDb</h3>
                                                
                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={require("../assets/img/screenshots/moviedb1.png")}
                                                        alt="Third slide"
                                                        />

                                                        <Carousel.Caption>
                                                        <h3>The MovieDb</h3>
                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                    </Carousel>
                                        </div>
                                        <div className="description">
                                            <h3>Title</h3>
                                            <p>
                                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                                            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.
                                            </p>
                                            <button><i class="fa fa-github" aria-hidden="true"></i> Source</button>
                                        </div>
                                    </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='5' sm='5' xl="5" className="work-col">
                                <div className="project">
                                        <div className="project-image">
                                            <Carousel>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={require("../assets/img/screenshots/moviedb1.png")}
                                                        alt="First slide"
                                                        />
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={require("../assets/img/screenshots/moviedb1.png")}
                                                        alt="Third slide"
                                                        />
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={require("../assets/img/screenshots/moviedb1.png")}
                                                        alt="Third slide"
                                                        />
                                                    </Carousel.Item>
                                                    </Carousel>
                                        </div>
                                        <div className="description">
                                            <h3>Title</h3>
                                            <p>
                                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                                            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.
                                            </p>
                                            <button><i class="fa fa-github" aria-hidden="true"></i> Source</button>
                                        </div>
                                </div>
                            </Col>
                            <Col md='5' sm='5' xl="5" className="work-col">
                            <div className="project">
                                        <div className="project-image">
                                            <Carousel>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={require("../assets/img/screenshots/moviedb1.png")}
                                                        alt="First slide"
                                                        />
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={require("../assets/img/screenshots/moviedb1.png")}
                                                        alt="Third slide"
                                                        />
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={require("../assets/img/screenshots/moviedb1.png")}
                                                        alt="Third slide"
                                                        />
                                                    </Carousel.Item>
                                                    </Carousel>
                                        </div>
                                        <div className="description">
                                        <h3>Title</h3>
                                            <p>
                                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                                            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.
                                            </p>
                                            <button><i class="fa fa-github" aria-hidden="true"></i> Source</button>
                                        </div>   
                                    </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        )
    }
}
export default Project;
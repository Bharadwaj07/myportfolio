import React from 'react';
import {Container,Row,Col,Carousel} from 'react-bootstrap';
// import myWork from './ProjectData';
class Project extends React.Component{
    render(){
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
                                                        src={require("../assets/img/screenshots/moviedb3.png")}
                                                        alt="First slide"
                                                        />
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={require("../assets/img/screenshots/moviedb2.png")}
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
                                        <h3>The MovieDb</h3>
                                            <p>
                                                The Movie Db is a react web app ,It is to display the recent movie details and trailers ,
                                                I have used TMDB api to render the movie data .

                                            </p>
                                            <button className="source-link"><a href="https://github.com/Bharadwaj07/TheMovieDb"><i className="fa fa-github" aria-hidden="true"></i> Source</a></button>
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
                                                        src={require("../assets/img/screenshots/centurysports1.png")}
                                                        alt="First slide"
                                                        />
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={require("../assets/img/screenshots/centurysports2.png")}
                                                        alt="Third slide"
                                                        />
                                                    </Carousel.Item>
                                                    </Carousel>
                                        </div>
                                        <div className="description">
                                            <h3>CenturySports</h3>
                                            <p>
                                                CenturySports is a simulation of sports website using angular and firebase 
                                                it has a simple registration and login interface.
                                            </p>
                                            <button className="source-link"><a href="https://github.com/Bharadwaj07/CenturySports"><i className="fa fa-github" aria-hidden="true"></i> Source</a></button>
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
                                                        src={require("../assets/img/screenshots/covidtracker1.png")}
                                                        alt="First slide"
                                                        />
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={require("../assets/img/screenshots/covidtracker2.png")}
                                                        alt="Third slide"
                                                        />
                                                    </Carousel.Item>
                                                    </Carousel>
                                        </div>
                                        <div className="description">
                                            <h3>Covid-19 Tracker</h3>
                                            <p>
                                                Covid-19 tracker is a react web application , it displays the live covid cases countrywise.
                                                I have used disease.sh api to render the data and leaflet api for maps.
                                            </p>
                                            <button className="source-link"><a href="https://github.com/Bharadwaj07/covid-19-tracker"><i className="fa fa-github" aria-hidden="true"></i> Source</a></button>
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
                                                        src={require("../assets/img/screenshots/portfolio1.png")}
                                                        alt="First slide"
                                                        />
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={require("../assets/img/screenshots/portfolio2.png")}
                                                        alt="Third slide"
                                                        />
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={require("../assets/img/screenshots/portfolio3.png")}
                                                        alt="Third slide"
                                                        />
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src={require("../assets/img/screenshots/portfolio4.png")}
                                                        alt="Third slide"
                                                        />
                                                    </Carousel.Item>
                                                    </Carousel>
                                        </div>
                                        <div className="description">
                                        <h3>My Portfolio</h3>
                                            <p>
                                                My portfolio is designed using react js .It is to display my work and my proficiancy in web development.
                                                It is just a front end project .
                                                
                                            </p>
                                            <button className="source-link"><a href="https://github.com/Bharadwaj07/myportfolio"><i className="fa fa-github" aria-hidden="true"></i> Source</a></button>
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
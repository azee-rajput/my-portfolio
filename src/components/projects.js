import React, {Component} from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



class Projects extends Component{
    render(){
        return(
            <div className="projects col-sm-12" id="projects">
                <h2 className="mb-5">Some of My Works</h2>
                <div className="carouselCostum">
                    <Carousel autoPlay={true} infiniteLoop={true} transitionTime={300}>

                            <div className="project">
                                <img src={require('../img/watch2ni8.png')} alt="avatar"/>
                                <h4>watch2ni8</h4>
                                <p>A movie and tv shows browsing website consuming REST APIs from <a href="themoviedb.org" target="_blank" rel="noopener noreferrer">themoviedbp.org</a></p>
                                <a className="btn btn-outline-primary demobtn" href="https://angry-saha-53e493.netlify.com/" target="_blank" rel="noopener noreferrer">Demo</a>                             
                                <a className="btn btn-outline-primary codebtn" href="https://github.com/azee-rajput/watch2ni8" target="_blank" rel="noopener noreferrer">Code</a>
                                <br/><br/>
                            </div>
                        
                            <div className="project">
                                <img src={require('../img/weatherreact.png')} alt="avatar"/>
                                <h4>Weather app</h4>
                                <p>A geoloactaion based react weather app consuming REST APIs from <a href="openweathermap.org" target="_blank" rel="noopener noreferrer">openweathermap.org</a></p>
                                <a className="btn btn-outline-primary demobtn" href="https://azee-rajput.github.io/react-weather/#/" target="_blank" rel="noopener noreferrer">Demo</a>                             
                                <a className="btn btn-outline-primary codebtn" href="https://github.com/azee-rajput/react-weather" target="_blank" rel="noopener noreferrer">Code</a>
                                <br/><br/>
                            </div>

                        
                        
                            <div className="project">
                                <img src={require('../img/cocktailreact.png')} alt="avatar"/>
                                <h4>Cocktail app</h4>
                                <p>A react app consuming REST APIs from <a href="thecocktaildb.com" target="_blank" rel="noopener noreferrer">thecocktaildb.com</a> and a mock-up of <a href="liquor.com" target="_blank" rel="noopener noreferrer">Liquor.com</a></p>
                                <a className="btn btn-outline-primary demobtn" href="https://azee-rajput.github.io/react-cocktail/#/" target="_blank" rel="noopener noreferrer">Demo</a>                             
                                <a className="btn btn-outline-primary codebtn" href="https://github.com/azee-rajput/react-cocktail" target="_blank" rel="noopener noreferrer">Code</a>
                                <br/><br/>
                            </div>
                        

                            <div className="project">
                                <img src={require('../img/foodreact.png')} alt="avatar"/>
                                    <h4>Food app</h4>
                                    <p>A react app consuming REST APIs from <a href="themealdb.com" target="_blank" rel="noopener noreferrer">themealdb.com</a> and design is mock-up of <a href="tasty.co" target="_blank" rel="noopener noreferrer">tasty.co</a></p>
                                    <a className="btn btn-outline-primary demobtn" href="https://azee-rajput.github.io/react-food/#/" target="_blank" rel="noopener noreferrer">Demo</a>                             
                                    <a className="btn btn-outline-primary codebtn" href="https://github.com/azee-rajput/react-food" target="_blank" rel="noopener noreferrer">Code</a>
                                    <br/><br/>
                            </div>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Projects;
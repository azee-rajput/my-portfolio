import React, {Component} from 'react';


class Home extends Component{
    render(){
        return(
            <div className="home text-center" style={{margin:"auto"}}>
                <div className="card">
                    <div className="face front">
                        {/* <img className="avatar card-image-top" src={require('../img/myAvatar.png')} alt="avatar"/> */}
                        <h1 className="name">Hi, I'm Abdul Zahir</h1>
                        <h2 className="title" style={{borderBlockColor:"white", borderBottomStyle:"dashed"}}>Frontend Web Developer</h2>
                        <p className="about">I'm a developer from Pakistan, currently focusing on front-end, with a goal to become full-stack developer. 
                            Check out some of my <a href="#projects">projects</a> down below. 
                            Currently looking for an entry level position.
                        </p>
                        <h3 className="skill">Skills<br/><i className="arrow far fa-arrow-alt-circle-down"></i></h3>
                    </div>
                
                
                    <div className="face back">
                        <p className="card-text skills row">
                            <span className="col-sm-1"></span>
                            <i className="fab fa-html5 col-md-2"> <br/>HTML5</i>
                            <i className="fab fa-css3-alt col-md-2"><br/> CSS3</i>
                            <i className="fab fa-js-square  col-md-2"><br/> Javascript</i>
                            <i className="fab fa-bootstrap  col-md-2"><br/> Bootstrap</i>
                            <i className="fab fa-react col-md-2"><br/> React.js</i>
                            <span className="col-sm-1"></span>
                        </p>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
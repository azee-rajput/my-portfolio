import React,{Component} from'react';

import Pdf from '../img/Abdul_Zahir-ic.pdf';

export default class Navbar extends Component{
    render(){
        return(
            <div className="nav">
                <label htmlFor="show-menu" className="show-menu">Show menu</label>
                <input type="checkbox" id="show-menu" role="button"/>
                <nav>
                <ul id="menu">
                    <li><a className="active" href="#">HOME</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    <li><a href={Pdf} rel="noopener noreferrer" target="_blank">RESUME</a></li>
                </ul>
                </nav>
            </div>
            
        )
    }
}
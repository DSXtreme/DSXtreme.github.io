import React from 'react';
import ToggleButton from "../SlideDrawer/ToggleButton"
import './Navbar.css';


const navbar = props => {

    return (
        <header className="navbar">
            <nav className="navbar_navigation">
                <div><ToggleButton click={props.toggleMenue}/></div>
                <div className="spacer"/>
                <div className="navbar_navigation-items">
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Showcase</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default navbar;

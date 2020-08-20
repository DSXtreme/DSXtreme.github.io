import React from 'react'
import "./SlideDrawer.css"

export default function SlideDrawer(props) {
    let menueClass= "side-menue";
    if(props.open){
        menueClass = "side-menue open"
    }
    return (
        <div className={menueClass}>
            <ul>
                <li><a href="#">list 1 </a></li>
                <li><a href="#">list 2 </a></li>
            </ul>
        </div>
    )
}

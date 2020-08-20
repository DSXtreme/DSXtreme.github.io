import React from 'react'
import "./ToggleButton.css"

const ToggleButton= props => {
    // console.log("props from ToggleButton componenet")
    // console.log(props)
    return (
        <button className="toggle-button" onClick={props.click}>
            <div className="toggle-button_line"></div>
            <div className="toggle-button_line"></div>
            <div className="toggle-button_line"></div>
        </button>
    )
}

export default ToggleButton;

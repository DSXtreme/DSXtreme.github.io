import React, { Component } from 'react'
import "./NavButtons.css"
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom"

class NavButtons extends Component {

    render() {
        return (

            <div className="home-button-container" >

                <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOutUp'
                    duration={5}
                    delay={0}
                    animatePreScroll={true}
                    offset={10000}
                    style={{ width: "100%", position: "fixed", zIndex: "1000", }}
                    animateOnce={true}
                >

                    <Link to="/">
                        <svg
                            version="1.1"
                            id="home-button"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style={{ enableBackground: "new 0 0 512 512" }}
                            xmlSpace="preserve">
                            <g>
                                <g>
                                    <path id="home-button-p1" d="M421.936,211.786v238.533h-90.064V347.155c0-9.045-7.331-16.375-16.375-16.375H200.324
                                    c-9.045,0-16.375,7.331-16.375,16.375v103.164H94.431V211.786H61.681v254.908c0,9.045,7.331,16.375,16.375,16.375h122.269
                                    c9.045,0,16.375-7.331,16.375-16.375V363.531h82.422v103.164c0,9.045,7.331,16.375,16.375,16.375h122.815
                                    c9.045,0,16.375-7.331,16.375-16.375V211.786H421.936z"
                                    />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path id="home-button-p2" d="M506.815,255.508L269.373,33.351c-6.25-5.857-15.966-5.895-22.27-0.104L5.295,255.405
                                    c-6.659,6.119-7.096,16.474-0.977,23.133c3.226,3.521,7.636,5.3,12.063,5.3c3.957,0,7.931-1.43,11.075-4.318L258.085,67.635
                                    l226.355,211.787c6.616,6.184,16.965,5.83,23.144-0.77C513.758,272.047,513.419,261.687,506.815,255.508z"
                                    />
                                </g>
                            </g>
                        </svg>
                    </Link>
                </ScrollAnimation>

            </div>
        )
    }

}


export default NavButtons

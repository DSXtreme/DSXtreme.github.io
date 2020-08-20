import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
import { Link } from "react-router-dom"


import "./Home.css"

export default class Home extends Component {

   componentWillMount(){
      window.scrollTo(0,0)
   }
   componentDidMount() {
      window.scrollTo(0,0)

   }

   render() {

      return (

         <div className="logo-container">
            <ParticlesBg type="polygon" color="#000000" num={.1} bg={true} />


            <div className="logo" style={{
               right: this.props.position.right ,
               transform: this.props.logoProperty.logoTransform,
               display: this.props.logoProperty.logoDisplay,
               opacity: this.props.logoProperty.logoOpacity,

            }}>
               <img src="/asset/logo/website_logo.png" alt="Logo" />

            </div>


            <div className="content"
               style={{
                  opacity: this.props.contentStyle.contentOpacity,
                  transform: "scale(" + this.props.contentStyle.contentScale + ")"
               }}>

               <p style={{ opacity: this.props.contentStyle.opacityGreeting }}>
                  <h2 style={{ color: this.props.contentStyle.contentH2Color }}>
                     <span style={{
                        opacity: this.props.contentStyle.opacityGreeting,
                     }}>
                        HI,
							</span>
                  </h2>
               </p>

               <p style={{
                  opacity: this.props.contentStyle.opacityName,
                  marginBottom: "11px"
               }}>
                  I am Debmalya De Sarkar.
               </p>

               <p style={{ opacity: this.props.contentStyle.opacityBody }}>
                  An enthusiast programmer, like to bring new ideas alive with the
                  power of creativity, imagination and handfull of experience
                  on developing applications and websites. And at
                  the same time like to reapresent the world with pixles or you
                  can call it photography as a hobby.
               </p>

               <span className="button-contaienr">
                  <Link to="/showcase" >
                     <div className="button" style={{ opacity: this.props.btnOpacity.buttonOpacity }}>
                        Show Case
                     </div>
                  </Link>
                  <Link to="/connectme" >
                     <div className="button" style={{ opacity: this.props.btnOpacity.buttonOpacity }}>
                        Connect me
                     </div>
                  </Link>

               </span>


            </div>

         </div>

      )
   }
}

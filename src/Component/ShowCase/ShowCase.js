import React, { Component } from 'react'
import NavButtons from "../NavButtons/NavButtons"
import ScrollAnimation from 'react-animate-on-scroll';
import "./ShowCase.css"

export default class ShowCase extends Component {

   state = {

      projects: [
         {
            id: Math.random(),
            name: "Tripper.",
            work: `Tracking of vehicles performance wasn't easier before,
                  Tripper is an cross platform app to provide all information
                  about your vehicle.`,
            tech: "Flutter, Firebase.",
            logo: "asset/tile-logo/Tripper-logo.png",
            date: "January 2020."
         },

         {
            id: Math.random(),
            name: "Quick weather.",
            work: `A quick way of tracking weaher in one tap, provide hazerdless
                  information on weather in your locality.`,
            tech: "Flutter, Open Weather API.",
            logo: "asset/tile-logo/quick-weather.png",
            date: "Decembar 2019."
         },

         {
            id: Math.random(),
            name: "Home Cloud.",
            work: `A personal cloud storage, no hazerd of buying a server,
                  host into your home at your hand.`,
            tech: "PHP, Apacahi, HTML, CSS.",
            logo: "asset/tile-logo/homeCloud-logo.png",
            date: "June 2019."
         },

         {
            id: Math.random(),
            name: "Agents Performmnace Tracker.",
            work: `A web app to keep track on performance of Agent's. this web app was buield for
                  ease of work for Development officers of Life Insurence Corporation of India.`,
            tech: "PHP, Apacahi, HTML, CSS.",
            logo: "asset/tile-logo/agnet.png",
            date: "Decembar 2018."
         }
      ]
   }

   componentDidMount = () => {
      window.scrollTo(0, 0);
   }


   render() {
      let element

      if (window.screen.width > 900) {

         element = <div className="project-container">

            <ScrollAnimation animateIn='fadeInDown'

               duration={2}
               animatePreScroll={true}
               offset={100}
               style={{ width: "100%", position: "fixed", zIndex: "1000"}}
               animateOnce={true}
            >

               <div className="heading-fixed">
                  <h1>Show Case</h1>
               </div>

            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeInDown'
               animateOut='fadeOutUp'
               duration={.8}
               animatePreScroll={true}
               offset={250}
               style={{ width: "100%", zIndex: 1001 }}
            >

               <div className="heading">
                  <h1>Show Case</h1>
               </div>

            </ScrollAnimation>

            {
               this.state.projects.map((project) => {
                  return (

                     <div className="tile" key={project.id} onScroll={console.log()}>

                        <ScrollAnimation animateIn='flipInX'
                           animateOut='flipOutX'
                           duration={.7}
                           animatePreScroll={false}
                           offset={300}
                        >
                           <div className="tile-logo">
                              <img src={project.logo} alt="Logo" />
                           </div>
                        </ScrollAnimation>

                        <div className="tile-content">

                           <ScrollAnimation animateIn='fadeInUp'
                              animateOut='fadeOut'
                              duration={.4}
                              animatePreScroll={false}>

                              <h2>{project.name}</h2>

                           </ScrollAnimation>

                           <ScrollAnimation animateIn='fadeInDown'
                              animateOut='fadeOutDown' duration={.3}
                              animatePreScroll={false}
                              >

                              <p>{project.work}</p>
                              <span className="dev-container">
                                 <span className="title-info">
                                    Developed using:
                                 </span>
                                 {project.tech}
                              </span>


                           </ScrollAnimation>

                           <ScrollAnimation animateIn='fadeIn'
                              animateOut='fadeOut'
                              animatePreScroll={false}
                              style={{marginTop: "7px"}}>

                              <span className="dev-on-container">
                                 <span className="title-info">
                                    Developed on:
                                 </span>
                                 {project.date}
                              </span>
                           </ScrollAnimation>

                        </div>

                     </div>

                  )
               })
            }
         </div>
      }
      else {

         //mobile view
         console.log(this.props.opacity.opacity)
         element = <div className="project-container">

            <ScrollAnimation animateIn='fadeInDown'
                animateOut='fadeOutUp'
               duration={2}
               animatePreScroll={false}
               offset={1000}
               style={{ width: "100%", position: "fixed", zIndex: "1000", }}
               animateOnce={true}
            >

               <div className="heading-fixed" style={{opacity:this.props.opacity.opacity}}>
                  <h1>Show Case</h1>
               </div>

            </ScrollAnimation>


            <ScrollAnimation animateIn='fadeInDown'
               animateOut='fadeOutUp'
               duration={.5}
               animatePreScroll={true}
               offset={90}
               style={{ width: "100%", zIndex: 1001 }}
            >

               <div className="heading">
                  <h1>Show Case</h1>
               </div>

            </ScrollAnimation>


            {
               this.state.projects.map((project) => {
                  return (

                     <div className="tile" key={project.id}>

                        <ScrollAnimation animateIn='flipInX'
                           animateOut='flipOutX'
                           duration={1}
                           animatePreScroll={true}
                           offset={300}
                        >
                           <div className="tile-logo">
                              <img src={project.logo} alt="Logo" />
                           </div>
                        </ScrollAnimation>

                        <div className="tile-content">

                           <ScrollAnimation animateIn='slideInLeft'
                              animateOut='slideOutLeft'
                              duration={.4}
                              animatePreScroll={false}>

                              <h2>{project.name}</h2>

                           </ScrollAnimation>

                           <ScrollAnimation animateIn='slideInRight'
                              animateOut='slideOutRight' duration={.5}
                              animatePreScroll={false}>

                              <p>{project.work}</p>
                              <span className="dev-tech">

                                 <span className="title-info">
                                    Developed using:
                                 </span>
                                 {project.tech}

                              </span>

                           </ScrollAnimation>

                           <ScrollAnimation animateIn='slideInRight'
                              animateOut='slideOutRight'
                              animatePreScroll={false}
                              offset={900}>

                              <span className="dev-date">

                                 <span className="title-info">
                                    Developed on:
                                 </span>
                                 {project.date}

                              </span>

                           </ScrollAnimation>
                        </div>

                     </div>

                  )
               })
            }
         </div>
      }


      return (
         <main>
            <NavButtons/>
            {element}
         </main>
      )
   }
}
//copyright, dsx logo size fix

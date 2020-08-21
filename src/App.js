import React, { Component } from 'react';
import Backdrop from "./Component/Backdrop/Backdrop"
import Home from "./Component/Home/Home"
import ShowCase from "./Component/ShowCase/ShowCase"
import ConenctMe from "./Component/Connect-me/ConnectMe"
import { BrowserRouter, Route, Switch  } from "react-router-dom"


//importing underscore throttle
import * as _ from "underscore";

import "./App.css"


class App extends Component {

  constructor(props) {
    super(props)

    this.ScreenWidth = 0
  }

  state = {

    logoStyle: {
      right: "",
    },

    contentStyle: {
      contentOpacity: "",
      opacityGreeting: "0",
      opacityName: "0",
      opacityBody: "0",
      contentH2Color: "",
      contentScale: "",
    },

    logo: {
      logoTransform: "",
      logoOpacity: "",
      logoDisplay: "",
    },

    buttonStyle: {
      buttonOpacity: ""
    },

    fixstyle: {
      opacity: 0
    }

  }

  componentDidMount() {

    //setting up default screen res
    this.ScreenWidth = window.innerWidth
    //screen size change
    window.addEventListener("resize", this.updateHeightHandeler)

    //setuping up scrollEvent with throttle of 10
    // window.scrollTo(0, 0); //setting up initail scroll to 0
    window.addEventListener('scroll', _.throttle(this.scrollEvent, 10))

  }

  componentWillMount(){
    console.log('First this called');
  }

  //fetching screen size for positioning logo.
  updateHeightHandeler = () => {
    this.ScreenWidth = window.innerWidth
  }

  //Handeling scroll event
  scrollEvent = () => {

    //calculating percentage of scroll
    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let newPosPercent = Math.round(scrollPercent * 80);

    console.log(" form app.js scrolled line 55: " + newPosPercent + "%")

    //changine logo position logo
    if (this.ScreenWidth > 900) {
      console.log("executing greater 767")

      if (newPosPercent > 4 && newPosPercent < 37) {
        this.setState({
          logoStyle: {
            right: newPosPercent + 32 + "%",
          },
        })
      }


      //changing opacity for content
      if (newPosPercent > 20 && newPosPercent < 37) {

        this.setState({
          contentStyle: {
            contentOpacity: newPosPercent + 100 + "%",
            opacityGreeting: newPosPercent + 60 + "%",
          }
        })

      }
      else if (newPosPercent > 40 && newPosPercent < 50) {

        this.setState({
          contentStyle: {
            contentOpacity: "100%",
            opacityGreeting: "100%",
            opacityName: newPosPercent + 30 + "%",

          }
        })

      }
      else if (newPosPercent > 60 && newPosPercent < 65) {

        this.setState({
          contentStyle: {
            contentOpacity: "100%",
            opacityGreeting: "100%",
            opacityName: "100%",
            opacityBody: newPosPercent + 30 + "%",
            contentH2Color: "#6fcef6"
          },
          buttonStyle: {
            buttonOpacity: "0"
          }
        })

      }
      else if (newPosPercent > 66 && newPosPercent < 100) {

        this.setState({
          contentStyle: {
            contentOpacity: "100%",
            opacityGreeting: "100%",
            opacityName: "100%",
            opacityBody: newPosPercent + 30 + "%",
            contentH2Color: "#6fcef6"
          },
          buttonStyle: {
            buttonOpacity: "1"
          }

        })

      }
      else if (newPosPercent < 20) {

        this.setState({
          contentStyle: {
            contentOpacity: "0",
            opacityGreeting: "0%",
            opacityName: "0%",
            opacityBody: "0%",
          }
        })

      }
    }

    else {

      //mobile view

      let i //scaling var

      //enabeling/disabling fix heaer in ShowCase
      if (newPosPercent > 4) {
        this.setState({
          fixstyle: {
            opacity: 1
          }
        })
      }
      else {
        this.setState({
          fixstyle: {
            opacity: 0
          }
        })
      }

      if (newPosPercent > 10 && newPosPercent < 30) {

        i = 2.5 + (newPosPercent / 50)
        this.setState({
          logo: {
            logoTransform: "scale(" + i + ")",
            logoOpacity: 120 - newPosPercent + "%",
          },
          contentStyle: {
            contentOpacity: "0",
          },
        })

      }
      else if (newPosPercent > 30 && newPosPercent < 60) {

        i = 3.6 + (newPosPercent / 50)
        console.log(10 - newPosPercent)
        this.setState({
          logo: {
            logoTransform: "scale(" + i + ")",
            logoOpacity: 50 - newPosPercent + "%",

          },
          contentStyle: {
            contentOpacity: "1",
            contentScale: ".6",
          },
          buttonStyle: {
            buttonOpacity: "0",
          }
        })

      }
      else if (newPosPercent > 60 && newPosPercent < 100) {

        i = 4 + (newPosPercent / 50)

        this.setState({
          contentStyle: {
            contentOpacity: "1",
            opacityGreeting: "1",
            opacityName: "1",
            opacityBody: "1",
            contentScale: "1",
          },
          logo: {
            logoDisplay: "none",
          },
          buttonStyle: {
            buttonOpacity: "1"
          }
        })

      }
      else if (newPosPercent < 10) {

        this.setState({
          logo: {
            logoTransform: "scale(" + 1 + ")",
          },
          contentStyle: {
            contentOpacity: "0",
            opacityGreeting: "0",
            opacityName: "0",
            opacityBody: "0",
            contentScale: ".6",
          },
        })

      }
      else if (newPosPercent < 100 || newPosPercent < 80) {
        this.setState({
          contentStyle: {
            contentOpacity: "0",
            opacityGreeting: "0",
            opacityName: "0",
            opacityBody: "0",
            contentScale: ".6",
          },
        })
      }

    }
  }

  render() {
    let backdrop

    if (this.state.menue) {
      backdrop = <Backdrop toggleMenue={this.toggleMenue} />
    }

    return (

      <div style={{ height: "100%" }}>
        <BrowserRouter>

          <Switch>

            <Route exact path="/" render={() =>
              <Home
                position={this.state.logoStyle}
                contentStyle={this.state.contentStyle}
                logoProperty={this.state.logo}
                btnOpacity={this.state.buttonStyle} />
            } />

            <Route path="/showcase" render={() =>
              <ShowCase opacity={this.state.fixstyle} />
            } />

            <Route path="/connectme" render={() =>
              <ConenctMe/>
            } />

          </Switch>

        </BrowserRouter>
      </div>
    )
  }

}

export default App;

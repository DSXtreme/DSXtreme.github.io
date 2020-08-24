import React, { Component } from 'react'
import Home from "./Component/Home/Home"
import ShowCase from "./Component/ShowCase/ShowCase"
import ConenctMe from "./Component/Connect-me/ConnectMe"
import { HashRouter, Route, Switch, } from "react-router-dom"


//importing underscore throttle
import * as _ from "underscore";

import "./App.css"


class App extends Component {

  constructor(props) {
    super(props)

    this.ScreenWidth = 0
    this.initPosPercent = null
  }

  state = {

    logoStyle: {
      right: "",
    },

    contentStyle: {
      contentOpacity: "",
      opacityGreeting: "",
      opacityName: "",
      opacityBody: "",
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
    window.addEventListener('scroll', _.throttle(this.scrollEvent, 100))

  }

  //fetching screen size for positioning logo.
  updateHeightHandeler = () => {
    this.ScreenWidth = window.innerWidth
  }

  //Handeling scroll event
  scrollEvent = () => {

    let newPosPercent
    if (window.scrollY === 0) {
      newPosPercent = this.initPosPercent;
    }
    else {
      //calculating percentage of scroll

      let scrollTop = window.scrollY;
      let docHeight = document.documentElement.scrollHeight
      let winHeight = window.innerHeight;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      newPosPercent = Math.round(scrollPercent * 80);

    }

    //changine logo position logo
    if (this.ScreenWidth > 900) {


      if (newPosPercent > 4 && newPosPercent < 37) {

        this.setState({
          logoStyle: {
            right: newPosPercent + 32 + "%",
          },
          buttonStyle: {
            buttonOpacity: "0",
          }
        })

      }
      else if (newPosPercent < 4) {
        this.setState({
          logoStyle: {
            right: "37%",
          },
          buttonStyle: {
            buttonOpacity: "0",
          }
        })
      }


      //changing opacity for content
      if (newPosPercent > 20 && newPosPercent < 37) {


        this.setState({
          contentStyle: {
            contentOpacity: (newPosPercent + 100)/100 ,
            opacityGreeting: (newPosPercent + 60)/100 ,
          },

        })

      }
      else if (newPosPercent > 40 && newPosPercent < 50) {

        this.setState({
          contentStyle: {
            contentOpacity: "1",
            opacityGreeting: "1",
            opacityName: (newPosPercent + 30)/100,
          },
          buttonStyle: {
            buttonOpacity: "0",
          },
          logoStyle: {
            right: "67%",
          },
        })

      }
      else if (newPosPercent > 60 && newPosPercent < 65) {

        this.setState({
          contentStyle: {
            contentOpacity: "100%",
            opacityGreeting: "100%",
            opacityName: "100%",
            opacityBody: (newPosPercent + 30)/100,
            contentH2Color: "#6fcef6"
          },
          buttonStyle: {
            buttonOpacity: "0"
          },
          logoStyle: {
            right: "67%",
          },
        })

      }
      else if (newPosPercent > 66 && newPosPercent < 100) {

        this.setState({
          contentStyle: {
            contentOpacity: "1",
            opacityGreeting: "1",
            opacityName: "1",
            opacityBody: (newPosPercent + 30)/100,
            contentH2Color: "#6fcef6 !important"
          },
          buttonStyle: {
            buttonOpacity: "1"
          },
          logoStyle: {
            right: "67%",
          },
        })

      }
      else if (newPosPercent < 20) {

        this.setState({
          contentStyle: {
            contentOpacity: "0",
            opacityGreeting: "0",
            opacityName: "0",
            opacityBody: "0",
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
          buttonStyle: {
            buttonOpacity: "0",
          }
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
      else if (newPosPercent < 100 || newPosPercent < 4) {
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
    return (

      <div style={{ height: "100%" }}>
        <HashRouter basename="/">

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
              <ConenctMe />
            } />

          </Switch>

        </HashRouter>
      </div>
    )
  }

}

export default App;

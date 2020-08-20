import React, { useEffect, useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import emailjs from "emailjs-com"
import NavButtons from "../NavButtons/NavButtons"
import "./ConnectMe.css"


export default function ConnectMe() {

    //chekcing if the msg was success/not

    const [submitSuccess, changeState] = useState("fail")
    const [alertOpacity, changeOpacity] = useState(0)
    //sending email via emailjs
    let sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('gmail', 'template_zTUSF5NX', e.target, 'user_fri38UVJnT3wRsEQBBLD2')
            .then((result) => {
                //changing state to sucess
                changeState("sucess")
                changeOpacity(1)
                console.log(result.text)
            }, (error) => {
                //changing state to fail
                changeState("fail")
                changeOpacity(1)
                console.log(error.text);
            })
        e.target.reset()
    }

    useEffect(() => {

        //makiing alert disapare after 7s
        setTimeout(() => {
            changeOpacity(0)
        }, 7000)

        //initial scroll to 0
        window.scrollTo(0, 0)
    })

    //scuess message dialgue
    let showMsg
    console.log(submitSuccess)

    //showing msg alert sucess/fial to connect
    switch (submitSuccess) {
        case "sucess":
            console.log("sucess exe")
            showMsg = <div className="alert-sucess" style={{ opacity: alertOpacity }}>
                <div>
                    <strong>Thank you,</strong><span>I will connect you back at my earliest</span>
                </div>
            </div>
            break

        case "fail":
            console.log("fail exe")
            showMsg = <div className="alert-fail" style={{ opacity: alertOpacity }}>
                <div>
                    <strong>Opps filed to send message!!</strong><span>Try resending</span>
                </div>

            </div>
            break
    }

    let buttonLogo = <svg version="1.1" id="send-logo" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 512.001 512.001" style={{ enableBackground: 'new 0 0 512.001 512.001' }}
        xmlSpace="preserve">
        <g>
            <g>
                <path id="l-1" d="M9.47,192.489c-5.539,2.215-9.248,7.49-9.461,13.451c-0.212,5.963,3.115,11.488,8.482,14.09l176.547,85.623L490.696,0.002
                L9.47,192.489z" />
            </g>
        </g>
        <g>
            <g>
                <path id="l-2" d="M206.344,326.96l85.624,176.548c2.525,5.206,7.798,8.491,13.552,8.491c0.179,0,0.357-0.003,0.538-0.01
                c5.962-0.212,11.237-3.921,13.453-9.46L512.001,21.306L206.344,326.96z" />
            </g>
        </g>
    </svg>



    return (
        <div className="connect-container">
            <ScrollAnimation animateIn='fadeInDown'

                duration={2}
                animatePreScroll={true}
                offset={1000}
                style={{ width: "100%", position: "fixed", zIndex: "1000", height: "12px" }}
                animateOnce={true}
            >

                <div className="heading-fixed">
                    <h1>Connect me </h1>
                </div>

            </ScrollAnimation>

            <div className="form-container">
                <NavButtons />
                <form onSubmit={sendEmail}>
                    <ScrollAnimation animateIn='fadeInDown'
                        duration={1}
                        animatePreScroll={true}
                        delay={1000}
                        offset={1000}
                        animateOnce={true}
                    >
                        <input type="text" placeholder="Your name? " name="name" required />

                    </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeInDown'
                        duration={.9}
                        delay={1300}
                        animatePreScroll={true}
                        offset={1000}
                        animateOnce={true}
                    >
                        <input type="text" placeholder="Your email? " name="email" required />
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeInDown'
                        duration={.9}
                        delay={1200}
                        animatePreScroll={true}
                        offset={1000}
                        animateOnce={true}
                    >

                        <textarea name="message" placeholder="Your message..." cols="10" rows="10"></textarea>

                    </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeInDown'
                        duration={.9}
                        delay={1600}
                        animatePreScroll={true}
                        offset={1000}
                        animateOnce={true}
                    >
                        <button className="form-button">{buttonLogo}</button>
                    </ScrollAnimation>
                </form>
                {showMsg}
            </div>
        </div>
    )
}

// import React,{useState} from 'react'
// import "./ConnectMe.css"

// export default function ConnectMe() {
//     const [state, change ] = useState({
//         count: 4,
//         theme: "blue"
//     })

//     let decCoutn = ()=>{
//         change(prevState => {
//             return {...prevState, count: prevState.count-1}
//         })
//     }

//     let incCoutn = ()=>{
//         change(prevState => {
//             return {...prevState ,count: prevState.count+1}
//         })
//     }

//     return (
//         <div>
//             <button onClick={decCoutn}>-</button>
//             <span>{state.count}</span>
//             <span>{state.theme}</span>
//             <button onClick={incCoutn}>+</button>
//         </div>
//     )
// }

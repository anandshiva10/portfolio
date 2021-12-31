import React from 'react';

import "./intro.css";

import Me from "../../img/me.png";

import Scroll from "../../img/scroll-down.svg"

const Intro = () => {

    return (

        <div className="i">

            <div className="i-left">

                <div className="i-left-wrapper">

                    <h2 className="i-intro">Hello, my name is</h2>

                    <h1 className="i-name">The Weeknd</h1>

                    <div className="i-title">

                        <div className="i-title-wrapper">

                            <div className="i-title-item">Singer</div>

                            <div className="i-title-item">Song Writer</div>

                            <div className="i-title-item">Actor</div>

                            <div className="i-title-item">Producer</div>

                            <div className="i-title-item">Business Man</div>

                        </div>

                    </div>

                    <p className="i-desc">Hi! I am  a Canadian singer-songwriter and record producer.<br/>Born and raised in Toronto, I began my recording career in 2009.</p>

                </div>

                <img src={Scroll} alt="" className="i-scroll"/>

            </div>

            <div className="i-right">

                <div className="i-bg"></div>

                <img src={Me} alt="" className="i-img"/>

            </div>

        </div>

    )

}

 

export default Intro
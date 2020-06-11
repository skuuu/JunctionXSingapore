import React, { Component } from "react";
import Footer from '../../global/Footer';
import CoverPhoto from '../../../images/junction_img/individual.jpg'
import JunctionXSGLogo from "../../../images/JxSingapore2019/JunctionX Singapore logo_white_twoline.png"

import '../../css/OurStory.css'
import '../../css/Partners.css';

class OurStory extends Component {


  render() {

    return (
      <div className="OurStory" id = "ourstoryclass">

        <div className="containerIntro" id="containerIntro-ourStory">
            <div className="wrapper" id="wrapper1-ourStory">
              <p className="headerLogoCommunity">This is JunctionX Singapore</p>
              <p className="header2LogoCommunity">
              A non-profit multi-disciplinary tech-community that is managed and run by Singapore tech-enthusiasts.
              We come together in order to bring tech-enthusiasts an opportunity to showcase their talents
              as well as to contribute back to the community.
              </p>
          </div>
        </div>

        <div className="containerMain-ourStory">
          <div className="container1-ourStory">
            <h3 className="wrapperTwo-grid-left">An extraordinary group of individuals brought together by their tech interest.</h3>
          </div>
          <div className="container2-ourStory">
            <p className= "wrapperTwo-grid-right">
            Started out from 2018 as part of a bigger global movement,
            Junction in Helsinki, JunctionX Hanoi has brought a new color
            to hackathon in Vietnam, with the record of biggest number of participants,
            coming from all fields and having English as the main language at the event.
            JunctionX Hanoi has enriched the life of hundreds of people through the 48 hours Hackathon and
            have made a statement and challenge the conventional way of looking at technology.
            The message came across was that coding is FUN, and technology is for EVERYONE.
            </p>
          </div>
          <div className = "container3-ourStory">
            <h3 className="wrapperTwo-grid-left">How did we start?</h3>
          </div>
          <div className = "container4-ourStory">
            <p className="wrapperTwo-grid-right">
            Our first local hackathon in Singapore took place in 2019.
            Through JunctionX Singapore, participants were able to challenge themselves
            in order to solve the problems.
            </p>
          </div>
        </div>

        <Footer />
      </div >
    );
  }
}

export default OurStory;
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import Footer from "../../global/Footer";

import './OurPartners.css'

// Imported JSX Components
import JxSingapore2019Stats from '../events/JxSingapore2019/JxSingapore2019Stats'
import Partners from '../events/JxSingapore2019/Partners' //to be removed

// Company Photos
import RakutenImg from '../../../images/JxSingapore2019/partners_img/Rakuten.png'
import ShopeeImg from '../../../images/JxSingapore2019/partners_img/Shopee.png'
import KasperskyAcademyImg from '../../../images/JxSingapore2019/partners_img/kasperskyNew.png'
import RakutenRapidApiImg from '../../../images/JxSingapore2019/partners_img/RakutenRapidAPI.png'
import RedBullImg from '../../../images/JxSingapore2019/partners_img/Redbull_logo.png'
import StartupXImg from '../../../images/JxSingapore2019/partners_img/startupxNew.png'
import TribeTheoryImg from '../../../images/JxSingapore2019/partners_img/Tribe_logo.png'
import KickstartImg from '../../../images/JxSingapore2019/partners_img/kickstartNew.png'
import ReassembleImg from '../../../images/JxSingapore2019/partners_img/Reassemble.jpeg'
import SalesforceImg from '../../../images/JxSingapore2019/partners_img/Salesforce.png'
import CirclesLifeImg from '../../../images/JxSingapore2019/partners_img/circleslifeNew.png'
import AmbidextrImg from '../../../images/JxSingapore2019/partners_img/ambidextrNew.png'


import { Link } from 'react-router-dom'


class OurPartners extends Component {


  render() {

    return (
      <div>


        <div className="OurPartners">
          <div>
            <div className="containerIntro" id="containerIntro-ourPartners">
              <div className="wrapper">
                <p className="headerLogoCommunity">Our Partners</p>
                <p className="header2LogoCommunity">
                  JunctionX Singapore is a non-profit volunteer led hackathon,
                  so we are glad to have companies who believe in this hackathon and collaborate with us to make this happen.
                </p>
              </div>
            </div>


            <div style={{ 'margin-bottom': 60 + 'px' }}></div>

            <div className="wrapper">
              <div className="flexbox1 flexbox">
                <div className="wrapperTwo-flexbox1-left1">
                  <div>Gold Partners</div>
                </div>
                <div className="wrapperTwo-flexbox1-right"> </div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>


              <div className="flexbox1 flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left1">
                  <img className="ourpartners-img" src={ShopeeImg} style={{ height: 150 + 'px' }} />
                </div>
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Shopee is a Singaporean e-commerce platform headquartered under the Sea Group, which was founded in 2015. It has since expanded and is now the largest e-commerce platform in SEA and Taiwan.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="flexbox1 flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left1">
                  <img className="ourpartners-img" src={RakutenImg} style={{ height: 150 + 'px' }} />
                </div>
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Rakuten Group is a global company that has an ecosystem of over 70 businesses in Europe, Asia Pacific and America. Founded in 1997, and nowadays sometimes referred to as “the Amazon of Japan”, Rakuten has gained remarkable position in the e-commerce and online retailing industry.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 80 + 'px' }}></div>

              <div className="flexbox1 flexbox">
                <div className="wrapperTwo-flexbox1-left1">
                  <div>Silver Partners</div>
                </div>
                <div className="wrapperTwo-flexbox1-right"></div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="flexbox1 flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left1">
                  <img className="ourpartners-img" src={KasperskyAcademyImg} style={{ height: 150 + 'px' }} />
                </div>
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Kaspersky Academy is dedicated to support young talents in IT security. Fighting against cybercrime, Kaspersky Academy brings together students, researchers and collaborative environments to discuss cybersecurity issues.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 80 + 'px' }}></div>

              <div className="flexbox1 flexbox">
                <div className="wrapperTwo-flexbox1-left1">
                  <div>Bronze Partners</div>
                </div>
                <div className="wrapperTwo-flexbox1-right"></div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>


              <div className="flexbox1 flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left1">
                  <img className="ourpartners-img" src={RakutenRapidApiImg} style={{ height: 150 + 'px' }} />
                </div>
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Rakuten RapidAPI is the world’s largest API marketplace with over a million developers and ten thousand APIs. Rakuten RapidAPI platform enables developers to find, connect, and manage their API connections.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="flexbox1 flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left1">
                  <img id="ourpartners-img" src={RedBullImg} style={{ height: 150 + 'px' }} />
                </div>
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Giving wings to people and ideas since 1987.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 80 + 'px' }}></div>


              <div className=" flexbox">
                <div className="wrapperTwo-flexbox1-left1">
                  <div>Community Partners</div>
                </div>
                <div className="wrapperTwo-flexbox1-right"> </div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left1">
                  <img className="ourpartners-img" src={StartupXImg} style={{ height: 150 + 'px' }} />
                </div>
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    StartupX is a team of community builders, innovation catalysts and changemakers supporting the early-stage startup ecosystem in Asia. Since 2014, the StartupX has grown one of the largest startup communities in Singapore.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left1">
                  <img id="ourpartners-img" src={TribeTheoryImg} style={{ height: 150 + 'px' }} />
                </div>
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Tribe Theory is a community-curated and business-friendly global startup hostel chain, designed to serve the needs of traveling startups, digital nomads, creative and entrepreneurial community. Besides comfortable living experience, Tribe Theory Startup Hostel aims to connect like-minded guests and provide support for startups.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left1">
                  <img id="ourpartners-img" src={KickstartImg} style={{ height: 150 + 'px' }} />
                </div>
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                  Kickstart is building a global community of student founders in Singapore and London, supporting their development from Day 0.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 80 + 'px' }}></div>

              <div className="flexbox">
                <div className="wrapperTwo-flexbox1-left1">
                  <div>Supporting Partners</div>
                </div>
                <div className="wrapperTwo-flexbox1-right"> </div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left1">
                  <img className="ourpartners-img" src={ReassembleImg} style={{ height: 150 + 'px' }} />
                </div>
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Reassemble started in early 2018. With designers, researchers and strategists, Reassemble creates human-centered design for the needs of customers facing the digital revolution.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left1">
                  <img id="ourpartners-img" src={SalesforceImg} style={{ height: 150 + 'px' }} />
                </div>
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Salesforce CRM platform brings customers and companies together. With over 150,000 companies and technologies like AI, Salesforce aims to help people create better jobs, lives, companies and communities.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left1">
                  <img id="ourpartners-img" src={CirclesLifeImg} style={{ height: 150 + 'px' }} />
                </div>
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Circles.Life is Asia's first fully digital telco launched in 2016. With its digital products and no-contract, data-focused mobile plans, Circles.Life is changing the digital services industry to more customer-centric and personalised.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 80 + 'px' }}></div>

              <div className="flexbox">
                <div className="wrapperTwo-flexbox1-left1">
                  <div>Media Partners</div>
                </div>
                <div className="wrapperTwo-flexbox1-right"></div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left1">
                  <img className="ourpartners-img" src={AmbidextrImg} style={{ height: 150 + 'px' }} />
                </div>
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Ambidextr is a full-service content marketing studio serving some of the Asia Pacific’s leading tech companies. With its end-to-end services backed by Future Now Ventures, Ambidextr aims to prepare brands for the new digital economy.
                  </div>
                  <div style={{ 'margin-bottom': 60 + 'px' }}></div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default OurPartners;


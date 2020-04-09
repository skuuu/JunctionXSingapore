import React, { Component } from "react";
import Footer from '../global/Footer';
import '../css/Team.css';
import Helena from '../../images/team_img/Helena.jpg'
import Petra from '../../images/team_img/Petra.jpg'
import Emir from '../../images/team_img/Emir.jpg'
import Naomi from '../../images/team_img/Naomi.jpg'
import ChangHsi from '../../images/team_img/ChangHsi.jpg'
import Bryan from '../../images/team_img/Bryan.jpg'



class Team extends Component {
  render() {
    return (
        <div className = "container"> 
          <div className = "containerTeam">
            <h1>Team</h1>
            <div>
              <div className='profile'>
                <div>
                  <img className="avatar" src={Bryan} alt="Bryan" />
                  <p>Bryan Phang</p>
                  <p className="position">Head of JunctionX Singapore</p>
                </div>
                <div>
                  <img className="avatar" src={ChangHsi} alt="ChangHsi" />
                  <p>Chang Hsi</p>
                  <p className="position">Head of JunctionX Singapore</p>
                </div>
              </div>
              <div className='profile'>
                <div>
                  <img className="avatar" src={Petra} alt="Petra" />
                  <p>Petra Jääskeläinen</p>
                  <p className="position">Marketing Strategist</p>
                </div>
                <div>
                  <img className="avatar" src={Emir} alt="Emir" />
                  <p>Emir Hamzah Mustaffa</p>
                  <p className="position">Marketing Designer</p>
                </div>
              </div>
              <div className='profile'>
                <div>
                  <img className="avatar" src={Naomi} alt="Naomi" />
                  <p>Naomi Wong</p>
                  <p className="position">Apparel Designer</p>
                </div>
                <div>
                  <img className="avatar" src={Helena} alt="Helena Hilander" />
                  <p>Helena Hilander</p>
                  <p className="position">Head of Participants</p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    );
  }
}

export default Team;
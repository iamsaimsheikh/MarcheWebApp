import React from "react";
import fbLogo from "../assets/icons/facebook.svg";
import behanceLogo from "../assets/icons/behance.svg";
import dribbleLogo from "../assets/icons/dribble.svg";
import instaLogo from "../assets/icons/instagram.svg";
import linkedinLogo from "../assets/icons/linkedin.svg";
import stackoverflowLogo from "../assets/icons/stackoverflow.svg";
import ProfilePicture from '../assets/profilepicture.jpg'
import esterPicture from '../assets/ester.jpg'
import salihaPicture from '../assets/salihaAhmed.png'

function Dashboard() {
  return (
    <div className="colGrid">
      <div className="dashboard">
        <div className="heading">
          <h1>Dashboard</h1>
          <h3>Statistics</h3>
        </div>

        <div className="dChartDiv">
          <div className="dChart">
            <h2>73%</h2>
            <div className="progressWrapper" style={{ width: "73%" }}>
              <div className="progress" />
            </div>
            <h3>Response Rate</h3>
          </div>

          <div className="dChart">
            <h2>56%</h2>
            <div className="progressWrapper" style={{ width: "56%" }}>
              <div className="progress" />
            </div>
            <h3>Product Quality</h3>
          </div>

          <div className="dChart">
            <h2>100%</h2>
            <div className="progressWrapper" style={{ width: "100%" }}>
              <div className="progress" />
            </div>
            <h3>Positive Rating</h3>
          </div>
        </div>

        <div className="heading">
          <h3>Messages</h3>
        </div>

        <div className="messagesDiv">
          <div className="messages">
            <div className="msgBlock">
              <div className="msgLeft">
                <div className="msgImg"><img src={ProfilePicture} className='profilePicture' /></div>
                <div className="msgInfo">
                  <div className="msgName">Waqas Ahmed</div>
                  <div className="msgText">Hey!</div>
                </div>
              </div>

              <div className="msgTime">10:23 AM</div>
            </div>

            <div className="msgBlock">
              <div className="msgLeft">
                <div className="msgImg"><img src={esterPicture} className='profilePicture' /></div>
                <div className="msgInfo">
                  <div className="msgName">Ester Exposito</div>
                  <div className="msgText">Was going through your idea of new signage, reply me.</div>
                </div>
              </div>

              <div className="msgTime">10:23 AM</div>
            </div>

            <div className="msgBlock">
              <div className="msgLeft">
                <div className="msgImg"><img src={salihaPicture} className='profilePicture' /></div>
                <div className="msgInfo">
                  <div className="msgName">Saliha Sarfraz</div>
                  <div className="msgText">Can we drop down the price a little bit?</div>
                </div>
              </div>

              <div className="msgTime">10:23 AM</div>
            </div>

          </div>
        </div>


        

      </div>

      <div className="info">
        <div className="heading">
          <h3>Active Investments</h3>
        </div>

        <div className="activeDiv">
          <div className="active">
              <div className='activeInfo'>
                  <div className='activeTitle'>Pro Signage</div>
                  <hr />
                  <div className='activeInvestor'>Saliha Sarfraz</div>
              </div>
              <div className='activePrice'> 
                  <div className='price'>$100</div>
              </div>
          </div>
          <div className="active">
          <div className='activeInfo'>
                  <div className='activeTitle'>Neuromorphic UI</div>
                  <hr />
                  <div className='activeInvestor'>Haseeb Akhter</div>
              </div>
              <div className='activePrice'> 
                  <div className='price'>$70</div>
              </div>
          </div>
          <div className="active">
          <div className='activeInfo'>
                  <div className='activeTitle'>Tracking Vehicle Chip</div>
                  <hr />
                  <div className='activeInvestor'>Saliha Sarfraz</div>
              </div>
              <div className='activePrice'> 
                  <div className='price'>$250</div>
              </div>
          </div>
        </div>

        <div className="heading">
          <h3>Social Accounts</h3>
        </div>

        <div className="accountsDiv">
          <div className="accounts">
            <a href="https://www.behance.net">
              <img alt="behanceLogo" src={behanceLogo} width="45" height="45" />
            </a>
            <a href="https://dribbble.com">
              <img alt="dribbleLogo" src={dribbleLogo} width="45" height="45" />
            </a>
            <a href="https://www.facebook.com/">
              <img alt="fbLogo" src={fbLogo} width="45" height="45" />
            </a>
            <a href="https://www.linked.in/">
              <img
                alt="linkedinLogo"
                src={linkedinLogo}
                width="45"
                height="45"
              />
            </a>
            <a href="https://www.instagram.com/">
              <img alt="instaLogo" src={instaLogo} width="45" height="45" />
            </a>
            <a href="https://www.stackoverflow.com/">
              <img
                alt="stackoverflowLogo"
                src={stackoverflowLogo}
                width="45"
                height="45"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from 'react'
import esterPicture from '../assets/ester.jpg'
import AttachIcon from '../assets/icons/attachIcon.svg'

function Chat() {
    return (
        <div className='chatScreen'>
            <div className='chatDiv'>
                <div className='chatHeader'>
                <div className="msgImg"><img src={esterPicture} className='profilePicture' /></div>
                <div className="msgInfo">
                  <div className="msgName">Ester Exposito</div>
              </div>

                </div>
                <div className='chatSection'>

                <div className='recMsg'>
                    <p>I have sent this message</p>
                </div>

                <div className='sendMsg'>
                    <p>haloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>

                <div className='recMsg'>
                    <p>I have sent this message</p>
                </div>

                <div className='sendMsg'>
                    <p>haloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>

                <div className='recMsg'>
                    <p>I have sent this message</p>
                </div>

                <div className='sendMsg'>
                    <p>haloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>

                <div className='recMsg'>
                    <p>I have sent this message</p>
                </div>

                </div>
                <div className='chatText'>
                    <div className='chatAttachment'><img src={AttachIcon}></img></div>
                    <div className='chatTextField'><input type='text' placeholder='Type Your Message' /></div>
                </div>
            </div>
            <div className='chatMessageDiv'>
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
            </div>
        </div>
    )
}

export default Chat

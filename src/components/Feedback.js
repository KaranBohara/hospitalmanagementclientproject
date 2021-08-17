import React from 'react';
import './feedback.css';
import feedbackimage from "./images/feedback2.png";
export default function Feedback()
{
    return(
        <div className="backgroundBox">
        <div className="containerBox">
          <div className="feedbackimageBox">
            <img src={feedbackimage}/>
          </div>
       <div className="feedbackbox">
        <div className="feedbacktitle">Your Feedback</div>
        <input type="text" id="feedbackname" name="feedbackname" placeholder="Name"></input>
        <input type="email" id="feedbackemail" name="feedbackemail" placeholder="Email"></input>
        <input type="text" id="feedbacksub" name="feedbacksub" placeholder="Subject"></input>
        <textarea className="txtarea" id="feedbacksub" name="feedbacksub" placeholder="Write your message here"></textarea>
        <input className="submitfeedback" type="submit" value="Submit" id="feedbacksubmit" name="feedbacksubmit" ></input>
        </div>
        </div>
        </div>
    );
}
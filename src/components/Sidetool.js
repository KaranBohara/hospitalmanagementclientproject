import React,{useState,useEffect} from 'react';
import "./sidetool.css";
import Login from './Login';
import Feedback from './Feedback';
import Pharmacycart from './Pharmacycart';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { NavLink } from 'react-router-dom';
// import {BrowserRouter as Router,Route,Switch } from "react-router-dom";

function Sidetool() {
    const [loginclicked,setLoginclicked]=useState(false);
    const [feedbackclicked,setFeedbackclicked]=useState(false);
    const [cartclicked,setCartclicked]=useState(false);
    // function to open login box
    let logindisplay=()=>
    {
      if(feedbackclicked)
      {
        setLoginclicked(!loginclicked);
        setFeedbackclicked(!feedbackclicked); 
      }
      else if(cartclicked)
      {
        setLoginclicked(!loginclicked);
        setCartclicked(!cartclicked);
      }
      else
      setLoginclicked(!loginclicked);
    };
    let feedbackdisplay=()=>
    {
      if(loginclicked)
      {
        setFeedbackclicked(!feedbackclicked); 
        setLoginclicked(!loginclicked);
      }
      else if(cartclicked)
      {
        setFeedbackclicked(!feedbackclicked); 
        setCartclicked(!cartclicked);
      }
      else
      setFeedbackclicked(!feedbackclicked); 
    };
    let cartdisplay=()=>
    {
      if(loginclicked)
      {
        setCartclicked(!cartclicked); 
        setLoginclicked(!loginclicked);
      }
      else if(feedbackclicked)
      {
        setCartclicked(!cartclicked); 
        setFeedbackclicked(!feedbackclicked); 
      }
      else
      setCartclicked(!cartclicked); 
    };
  return (
    <div className="sidetoolrelative">
    <div className="sidetool">
  <Tippy placement="left" content="Login" >
     <div className="login" id="login"><NavLink to="/login"><i class="fas fa-users"></i></NavLink></div>
  </Tippy>
  <Tippy placement="left" content="Pharmacy Cart" >
  <div className="Cart" id="cart"><NavLink to="/pharmacycart"><i onClick={cartdisplay} class="fas fa-shopping-cart"></i></NavLink></div>
   </Tippy>
    <Tippy placement="left" content="Feedback" >
  <div className="Feedback" id="Feedback"><NavLink to="/feedback"><i onClick={feedbackdisplay} class="fas fa-comment-dots"></i></NavLink></div>
  </Tippy>
</div>
</div>
  );
}
export default Sidetool;
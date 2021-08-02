import React,{useState} from 'react';
import './login.css';
export default function Login()
{
    const [signup, setSignup] = useState(true);
    const signupfunc=()=>
    {
      setSignup(!signup);
    }
    return(<>
    <div className="sidetoolcontainer">
    {signup?
      <div className="loginbox">
      <div className="maintitle">User Login</div>
      <form name="login">
      <div className="usernumber"><input type="tel" id="mobileno" name="phone" pattern="[0-9]{10}" maxLength="10" placeholder="Mobile Number"></input></div>
      <div className="userpassword"><input type="password" id="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
      placeholder="Password"></input></div> 
      <div className="loginbtn"><input type="submit" value="Login" name="login" id="login"></input></div>
      <div className="bottomcontent" onClick={signupfunc}>New User? Register Here!</div>
      <div className="bottomcontent">Forgot Password?</div>
      </form>
      </div>
    :
      <div className="signupbox">
      <div className="maintitle">User SignUp</div>
      <form name="signup">
      <div className="usernumber"><input type="tel" id="mobileno" name="phone" pattern="[0-9]{10}" maxLength="10" placeholder="Enter Mobile Number"></input></div>
      <div className="userpassword"><input type="password" id="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
      placeholder="Password"></input></div> 
      <div className="userpassword"><input type="password" id="cpassword" name="cpassword" 
      placeholder="Confirm Password"></input></div> 
      <div className="loginbtn"><input type="submit" value="Signup" name="Signup" id="Signup"></input></div>
      <div className="bottomcontent" >Already Registered! Sign in</div>
      </form>
      </div>
    }
        
        
    </div>
    </>);
}
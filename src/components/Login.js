import React,{useState} from 'react';
import './login.css';
import imagelogin from "./images/patient.png";
export default function Login()
{
    const [loginform, setLoginform] = useState(true);
    const [otp,setOtp]=useState(true);
    const [resetpass,setResetpass]=useState(true);
    const signupfunc=()=>
    {
      setLoginform(!loginform);
    }
    const otpgenerationfunc=()=>
    {
      setOtp(!otp);
    }
    const resetpassword=()=>
    {
      setResetpass(!resetpass);
      setOtp(!otp);
    }
    return(<div className="backgroundBox">
    <div className="containerBox">
      <div className="imageBox">
        <img src={imagelogin}/>
      </div>
      <div className="formBox">
        <h6>Welcome to NewLife Hospital</h6>
      {loginform?
<>
  <div className="loginbox" style={(otp==true && resetpass==true)?{display:'flex'}:{display:'none'}}>
  <div className="maintitle">User Login</div>
  <form name="login">
  <div className="userdata"><div className="usericon"><i class="fas fa-user"></i></div><input type="text" id="userdata" name="userdata" placeholder="Mobile Number/Email-id"></input></div>
  <div className="userpassword"><div className="usericon"><i class="fas fa-key"></i></div><input type="password" id="loginpassword" name="loginpassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
  placeholder="Password"></input></div> 
  <div className="loginbtn"><button type="submit" name="login" id="login">Login</button></div>
  </form>
  <div className="bottomcontent" onClick={signupfunc}>New User? Register Here!</div>
  <div className="bottomcontent1" onClick={otpgenerationfunc}>Forgot Password?</div>
  </div>
  <div className="resetbox" style={(otp==false && resetpass==true)?{display:'flex'}:{display:'none'}}>
  <div className="maintitle">Verify OTP</div>
  <form name="otpgeneration">
  <div className="userdata"><input type="text" id="userdata" name="userdata" placeholder="Registered Mobile Number/Email-id"></input></div>
  <div className="SendOTP"><input type="submit" name="send" id="send" value="Send OTP"></input></div>
  <div className="otp"><input type="tel" id="otp" name="otp" placeholder="Enter OTP"></input></div>
  <div className="verify" onClick={resetpassword}>Verify</div>
  </form>
    </div>
    <div className="resetpassbox" style={(otp==true && resetpass==false)?{display:'flex'}:{display:'none'}}>
  <div className="maintitle">Reset Password</div>
  <form name="resetpasswordform">
  <div className="resetpassword"><input type="password" id="resetpassword" name="resetpassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Enter Password"></input></div> 
  <div className="cresetpassword"><input type="password" id="cresetpassword" name="cresetpassword" 
  placeholder="Confirm Password"></input></div> 
  <div className="reset"><button type="submit" name="Reset" id="Reset">Reset</button></div>
  </form>
    </div>
    </>
:
  <div className="signupbox">
  <div className="maintitle">User SignUp</div>
  <form name="signup">
  <div className="username"><input type="text" id="username" name="username" placeholder="Enter Username"></input></div>
  <div className="userdata"><input type="text" id="userdata" name="userdata" placeholder="Mobile Number/Email-id"></input></div>
  <div className="userpassword"><input type="password" id="signuppassword" name="signuppassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Enter Password"></input></div> 
  <div className="cuserpassword"><input type="password" id="cpassword" name="cpassword" 
  placeholder="Confirm Password"></input></div> 
  <div className="signupbtn"><input type="submit" value="Signup" name="Signup" id="Signup"></input></div>
  <div className="bottomcontent1" onClick={signupfunc}>Already Registered! Sign in</div>
  </form>
  </div>
}   
      </div>
    </div>
    </div>
);
}
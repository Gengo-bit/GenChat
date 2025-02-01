import React, { useEffect } from "react";
import "./LandingPage.css";
import SignInGoogle from "../Auth/SignIn/SignInGoogle";
import SignInFacebook from "../Auth/SignIn/SignInFacebook";
import Logo from "../assets/GenChat.png";
import Background from './particles';
import { getAuth } from "firebase/auth";
// import video1 from "../assets/video1.mp4";
// Hooks
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const auth = getAuth();

const LandingPage: React.FC = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/HomePage');
    }
  }, [user, navigate]);

  return (
    <div className="landing-container">
      <Background id="landing-background" className="landing-background" />
      <div className="div1">  </div>
      <div className="div2">
        <form>
            <img src={Logo} className="landing-logo" />
            <div className="input-box">
              <input type="text" id="username" placeholder="Username"  required />
            </div>
            <div className="input-box">
                <input type="password" id="password" placeholder="Password"  required />
            </div>
            <input type="submit" id="Login" placeholder="" value="Log In" className="landing-submit" required />
            <div className="links">
                <a className="forget-pass">Forgot password?</a>
                <a className="sign-up">Sign Up</a>
            </div>
            <div className="socmed-links">
                <a className="forget-pass">Log In with:</a>
            </div>
            <div className="socmed-container">
            <SignInGoogle className="signin-button" />
            <SignInFacebook className="signin-button" />
            </div>
            
          </form>
        
          </div>
      
          
    </div>
  );
}

export default LandingPage

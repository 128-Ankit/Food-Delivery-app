import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

// eslint-disable-next-line react/prop-types
const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("sign up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="your name" required />
          )}
          <input type="email" placeholder="your mail" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>
          {currentState === "sign up" ? "create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>BY continuing, i agree to the terms of use & privacy policy.</p>
        </div>

        {currentState === "Login" ? (
          <p>
            Create a new account? <span onClick={()=> setCurrentState("sign up")}>Click Here</span>
          </p>
        ) : (
          <p>Already have an account. <span onClick={()=> setCurrentState("Login")}>Click Here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;

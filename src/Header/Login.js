import React from "react";
import './login.css';

export default function Login() {
  return (
    <div className="COintainer">
      <div className="Form-Cointainer">
        <input type="text" className="Name" placeholder="E-mail Address"/>
        <input type="password" className="password" placeholder="Password"/>
        <div className="button">
          <button className="Submit">Submit</button>
          <button className="Login">Login</button>
        </div>
      </div>
    </div>
  );
}

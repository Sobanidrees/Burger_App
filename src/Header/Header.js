import { useState } from "react";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  const [burger, setburger] = useState("b1");
  const [login, setlogin] = useState("b2");

  return (
    <div className="Header-Cointainer">
      <div className="img-cont">
        <img
          src="https://react-builder-burger.firebaseapp.com/static/media/burger-logo.b8503d26.png"
          alt="myBurger"
          className="logo"
        />
      </div>
      <div className="Buttons">
        <Link className="l2" to="/">
          <button
            onClick={() => {
              setburger("b1");
              setlogin("b2");
            }}
            className={burger}
          >
            Burger Builder
          </button>
        </Link>
        <Link className="l2" to="/login">
          <button
            onClick={() => {
              setburger("b2");
              setlogin("b1");
            }}
            className={login}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

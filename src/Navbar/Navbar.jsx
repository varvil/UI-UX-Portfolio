import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav__wrapper">
      <div className="nav__container">
        <div className="left__container">
          <h1 className="nav__title"> Ville Varjus</h1>
        </div>
        <div className="right__container">
            <ul>
                <li>Work</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

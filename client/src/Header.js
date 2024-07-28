import React from "react";
import imgMain from "./img/img.svg";
import "./img.css";

function Header() {
  return (
    <>
      <header>
        <div className="img-main">
          <img src={imgMain} alt="" />
        </div>
      </header>
    </>
  );
}

export default Header;

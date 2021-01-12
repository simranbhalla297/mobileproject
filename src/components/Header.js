import React from "react";
import { Button } from "react-bootstrap";
function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="right">
          <div className="rightContainer">
            <h2>More than just shorter links</h2>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <Button variant="secondary" className="headerbtn">
              Get Started
            </Button>
          </div>
        </div>
        <div className="left">
          <div className="leftContainer">
            <img src={"headerimg.svg"} alt={"headerimg"} className="leftimg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

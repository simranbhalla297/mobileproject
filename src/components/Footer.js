import React from "react";
import { Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="footer-wrapper">
          <Row>
            <Col md={4} sm={12}>
              <div className="logo">
                <img src={"footer-logo.svg"} className="headerImg" />
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="footer_link">
                <div className="first">
                  <h3>Features</h3>
                  <p>link shortening</p>
                  <p>branded link</p>
                  <p>analytics</p>
                </div>
                <div className="first">
                  <h3>Resources</h3>
                  <p>Blog</p>
                  <p>Developer</p>
                  <p>Support</p>
                </div>
                <div className="first">
                  <h3>Company</h3>
                  <p>About</p>
                  <p>Our team</p>
                  <p>Carrer</p>
                  <p>Contact</p>
                </div>
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="social_links">
                <div className="link">
                  {" "}
                  <img src={"facebook.svg"} className="headerImg" />
                </div>
                <div className="link">
                  {" "}
                  <img src={"instagram.svg"} className="headerImg" />
                </div>
                <div className="link">
                  {" "}
                  <img src={"twitter.svg"} className="headerImg" />
                </div>
                <div className="link">
                  {" "}
                  <img src={"pinterest.svg"} className="headerImg" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Footer;

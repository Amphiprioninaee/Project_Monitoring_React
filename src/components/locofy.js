// src/components/Login.js
import React from 'react';
import './../CSS/locofy.css';
// import imgLogin from './../images/img-login.svg';
// import footerImg from "./../images/footer-img.svg";
// import lgIcon from "./../images/lg.svg";
// import userIcon from "./../images/User.svg";
// import linkedinIcon from "./../images/LinkedIn Circled.svg";
// import instagramIcon from "./../images/Instagram Circle.svg";
// import twitterIcon from "./../images/TwitterX.svg";
// import atSignIcon from "./../images/At sign.svg";

const EX = () => {
  return (
    <div>
      {/* HEADER SECTION */}
            <div className="container">
            <img className="img" alt="" src="/image-102@2x.png" />
            <div className="gradient"></div>
            <header className="header">
                <div className="content">
                    <div className="logo">
                        <b>Median</b><span>Skill</span>
                    </div>
                    <b className="login">Login</b>
                    <div className="nav-item">Home</div>
                    <div className="nav-item">About</div>
                    <div className="nav-item">Contact</div>
                    <div className="background">
                        <img className="logo-img" loading="eager" alt="" src="/image-5@2x.png" />
                        <div className="overlay"></div>
                    </div>
                </div>
            </header>
        </div>


      {/* LOGIN SECTION */}
      <div className="login-container">
        <div className="background-overlay"></div>
        <div className="login-content">
            <div className="login-form">
                <div className="form-header">
                    <div className="header-title">LOGIN AKUN</div>
                </div>
                <div className="form-body">
                    <div className="info-message">
                        <span>Exclusive for</span>
                        <span className="text-gray-400">{` `}</span>
                        <span className="text-steelblue-200">PT Median Talenta Raya</span>
                        <span className="text-gray-400">{` `}</span>
                        <span>staff members.</span>
                    </div>
                    <form className="login-form-fields">
                        <div className="form-field">
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="form-field">
                            <input type="password" placeholder="Password" />
                        </div>
                    </form>
                    <div className="forgot-password">
                        <div className="forgot-text">Lupa Password?</div>
                        <button className="login-button">LOGIN</button>
                    </div>
                </div>
            </div>
            <div className="login-title">
                <h1 className="title-text">Staff Login.</h1>
            </div>
        </div>
    </div>


      {/* FOOTER SECTION */}
            <div className="footer">
            <footer className="footer-overlay"></footer>
            <div className="footer-content">
                <div className="project">
                    <h3 className="title">Project Monitoring System</h3>
                    <div className="version">Versi 1.0</div>
                </div>
                <div className="links">
                    <div className="rights">© 2024 - MedianSkill</div>
                    <div className="social">
                        <img src="/linkedin-circled@2x.png" alt="LinkedIn" />
                        <img src="/twitterx@2x.png" alt="Twitter" />
                        <img src="/instagram-circle@2x.png" alt="Instagram" />
                        <img src="/at-sign@2x.png" alt="Email" />
                        <div className="website">medianskill.id</div>
                    </div>
                </div>
            </div>
            <div className="quote">
                <div className="quote-section">
                    <p>"Tracks and records client projects efficiently."</p>
                </div>
                <img src="/image-133@2x.png" alt="Project Image" />
            </div>
        </div>

    </div>
  );
};

export default EX;

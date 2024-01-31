import React from 'react';
import './../CSS/Login.css';
import  img from './../images/img-login.svg'
import ft from "./../images/footer-img.svg"
import lg from "./../images/lg.svg"
import user from "./../images/User.svg"
import link from "./../images/LinkedIn Circled.svg"
import ig from "./../images/Instagram Circle.svg"
import tw from "./../images/TwitterX.svg"
import sg from "./../images/At sign.svg"


const Login = () => {
  return (
    <div>
        {/* HEADER SECTION */}

        <header className="login-page-inner">
          <div className="medianskill-parent">
              <div className="medianskill">
                  <b>Median</b>
                  <span>Skill</span>
              </div>
              <b className="login">Login</b>
              <div className="home">Home</div>
              <div className="about">About</div>
              <div className="contact">Contact</div>
              <div className="image-5-parent">
                      <img src={lg} alt="lg" className="logo-median" />
                  <div className="frame-child"></div>
              </div>
          </div>
      </header>

          {/* // LOGIN SECTION */}
          <div className="loglog">LOGIN AKUN</div>
          <div className="exclusive-for-pt-median-talent-parent">

          {/* <p className="exclusive-for-pt-median-talenta-raya-staff-members-pur">
            <span className="exclusive-1">Exclusive for</span>
            <span className="exclusive-for-pt-median-talenta-raya-staff-members-pur-sub-1"></span>
            <span className="exclusive-for-pt-median-talenta-raya-staff-members-pur-sub-2">PT Median Talenta Raya</span>
          </p> */}

              <div className="exclusive-for-pt-container">
                  <span>Exclusive for</span>
                  <span className="span"> </span>
                  <span className="pt-median-talenta">PT Median Talenta Raya</span>
                  <span className="span1"> </span>
                  <span>staff members.</span>
              </div>
              <form className="frame-container">
                  <div className="rectangle-container">
                      <div className="rectangle-div"></div>
                      <img src={user} alt="user" className="user-icon" />
                      <input
                          className="username"
                          placeholder="Username"
                          type="text" />
                  </div>
                  <div className="group-div">
                      <div className="frame-child1"></div>
                      <img src={user} alt="user" className="user-icon1" />
                      <input
                          className="password"
                          placeholder="Password"
                          type="text" />
                  </div>
                  <div className="password-frame">
                      <div className="lupa-password">Lupa Password?</div>
                      <button className="group-button">
                          <div className="frame-child2"></div>
                          <b className="login1">LOGIN</b>
                      </button>
                  </div>
              </form>
          </div>

           {/* FOOTER SECTION */}
            <div className="project-monitoring-system">
        <h1 className="staff-login">Staff Login.</h1>
        <div className="twitter-x-instagram">
            <footer className="twitter-x-instagram-child"></footer>
            <div className="median-skill-logo">
            <div className="frame-group1">
                <div className="login-akun-label">
                <h3 className="project-monitoring-system1">
                    Project Monitoring System
                </h3>
                </div>
                <div className="versi-10">Versi 1.0</div>
            </div>
            </div>
            <div className="allrights-reserved">
            <div className="logo-frame">
                <div className="frame-footer">
                <div className="all-rights-reserved">
                    All rights reserved.
                </div>
                <div className="copyright-2024-">
                    © Copyright 2024 - MedianSkill.
                </div>
                </div>
            </div>
            <div className="group-info">
            <img src={link} alt="linkedin-circled-icon" className="linkedin-circled-icon" />
               
                <div className="social-media-icons">
                <div className="profile-picture">
                <img src={tw} alt="twitterx-icon" className="twitterx-icon" />
                <img src={ig} alt="instagram-icon" className="instagram-circle-icon" />
                <img src={sg} alt="at-sign-icon" className="at-sign-icon" />
                </div>
                <div className="username-box">
                    <b className="medianskillid">medianskill.id</b>
                </div>
                </div>
            </div>
            </div>
            <div className="project-monitoring-system-parent">
            <div className="project-monitoring-system2">
                <div className="project-monitoring-system-child"></div>
                <div className="client-projects">
                <div className="client-projects-child"></div>
                <div className="tracks-and-records-container">
                    <b className="tracks-and-records">
                    Tracks and records client projects
                    </b>
                    <span className="efficiently">efficiently.</span>
                </div>
                </div>
                <img src={img} alt="lg" className="image-133-icon" />
            </div>
            {/* <div className="login-text-label">
                <div className="logo-image"></div>
            </div>
            <div className="divider-line">
                <div className="comma-sign">
                <h3 className="h3">“</h3>
                <div className="wrapper">
                    <h3 className="h31">“</h3>
                </div>
                </div>
            </div> */}
            </div>
        </div>
        <div className="vector-parent">
        <img src={ft} alt="lg" className="gkada" />
            {/* <img className="vector-icon" alt="" src="./public/vector-2.svg" />
            <img
            className="image-85-icon"
            alt=""
            src="./public/image-85@2x.png"
            /> */}
        </div>
        </div>
    </div>
  );
};

export default Login;
import { FunctionComponent } from "react";
import "./../CSS/LoginPage.css";
import elm from './../images/7elemet@2x.png'
import sign from './../images/at-sign@2x.png'
import img from './../images/image-133@2x.png'
import ig from './../images/instagram-circle@2x.png'
import lg from './../images/logo-median.svg'
import lk from './../images/linkedin-circled@2x.png'
import tw from './../images/twitterx@2x.png'
import user from './../images/user@2x.png'
import dmn from './../images/image 85.png'

const LoginPage: FunctionComponent = () => {
  return (
    <div className="login-page">
      <header className="frame-home-about-contact-wrapper">
        <div className="frame-home-about-contact">
          {/* <div className="medianskill">
            <b>Median</b>
            <span>Skill</span>
          </div> */}
          <b className="login">Login</b>
          <div className="home">Home</div>
          <div className="about">About</div>
          <div className="contact">Contact</div>
          <div className="frame-lg">
          <img src={lg} alt="lg" className="logo-median" />
            <div className="ellipse-circle" />
          </div>
        </div>
      </header>
      <main className="frame-user-credentials">
        <section className="frame-group-user">
          <div className="text-l-o-g-i-n-a-k-u-n">
            <div className="frame-exclusive">
              <div className="frame-exclusive-child" />
              <div className="rectangle-parent">
                <div className="frame-child" />
                <div className="login-akun">LOGIN AKUN</div>
              </div>
              <div className="text-password">
                <div className="exclusive-for-pt-container">
                  <span>Exclusive for</span>
                  <span className="span">{` `}</span>
                  <span className="pt-median-talenta">
                    PT Median Talenta Raya
                  </span>
                  <span className="span1">{` `}</span>
                  <span>staff members.</span>
                </div>
                <div className="group-login">
                  <div className="rectangle-group">
                    <div className="frame-item" />
                    <img src={user} alt="" className="user-icon" />
                    <div className="username">Username</div>
                  </div>
                  <div className="rectangle-container">
                    <div className="frame-inner" />
                    <img src={user} alt="" className="user-icon1" />
                    <div className="password">Password</div>
                  </div>
                  <div className="login-form">
                    <div className="lupa-password">Lupa Password?</div>
                    <div className="group-div">
                      <div className="rectangle-div" />
                      <b className="login1">LOGIN</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background-frame">
            <div className="footer-frame">
            <img src={elm} alt="" className="elemet-icon" />
              <div className="footer-img">
              {/* <img src={dmn} alt="" className="instagram-icon" /> */}
                <h1 className="staff-login">Staff Login.</h1>
                <h3 className="project-monitoring-system">
                  Project Monitoring System
                </h3>
                <div className="versi-10">Versi 1.0</div>
                <div className="all-rights-reserved">All rights reserved.</div>
                <b className="medianskillid">medianskill.id</b>
                <div className="copyright-2024-">
                  © Copyright 2024 - MedianSkill.
                </div>
                <img src={lk} alt="" className="linkedin-circled-icon" />
                <img src={sign} alt="" className="at-sign-icon" />
                <img src={ig} alt="" className="instagram-circle-icon" />
                <footer className="blank-frame">
                  <div className="blank-frame-child" />
                </footer>
                <img src={tw} alt="" className="twitterx-icon" />
                <img src={dmn} alt="" className="diamond-icon" />
              </div>
            </div>
            <div className="img-login">
              <div className="tracking-projects-frame">
                <div className="ellipse-shape">
                  <div className="ellipse-shape-child" />
                  <div className="tracks-and-records-container">
                    <b className="tracks-and-records">{`Tracks and records client projects `}</b>
                    <span className="efficiently">efficiently.</span>
                  </div>
                </div>
                <div className="rounded-ellipse" />
                <img src={img} alt="lg" className="image-133-icon" />
              </div>
              <div className="footer-frame1">
                <div className="second-ellipse" />
              </div>
              {/* <div className="thin-frame">
                <div className="comma-frames">
                  <h3 className="h3">“</h3>
                  <div className="spacer-texts">
                    <h3 className="h31">“</h3>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;

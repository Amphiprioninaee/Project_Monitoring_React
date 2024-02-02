import React, { useState } from "react";
import axios from "axios";
import './../CSS/loginn.css';
import as from "./../images/7elemet.svg";
import user from "./../images/User.svg";
import dmn from "./../images/diamond.svg";
import gr from "./../images/Group 225.svg";
import lg from "./../images/lg.svg";

export const Loginn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        const response = await axios.post("YOUR_LOGIN_ENDPOINT", {
          username,
          password,
        });
  
        // Dapatkan token dari respons server
        const token = response.data.token;
  
        // Simpan token di tempat penyimpanan yang sesuai
        localStorage.setItem('token', token);
  
        // Handle logika login berhasil (mungkin dengan mengarahkan pengguna ke halaman beranda)
        console.log("Login successful!");
      } catch (error) {
        // Handle error (mungkin menampilkan pesan kesalahan atau melakukan sesuatu yang sesuai)
        console.error("Login failed:", error.message);
      }
    };

  return (
    <div className="loginn">
      <div className="div">
        <div className="overlap">
            <div className="vector"/>
            <div className="gerigi"/>
            <div className="rectangle" />
            <img className="image" alt="Image" src={as} />
          <div className="rectangle-2" />
          <p className="exclusive-for-PT">
            <span className="text-wrapper">Exclusive for</span>
            <span className="span">&nbsp;</span>
            <span className="text-wrapper-2">PT Median Talenta Raya</span>
            <span className="span">&nbsp;</span>
            <span className="text-wrapper">staff members.</span>
          </p>
          <div>
            <div className="group">
              
                <img className="user" alt="User" src={user} />
                <input
                className="overlap-group"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
             
            </div>
            <div className="overlap-wrapper">
              
                <img className="user" alt="User" src={user} />
                <input className="overlap-group"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
            </div>
           
            <button className="overlap-2" type="button" onClick={handleLogin}>
              Login
            </button>
            
          </div>
          <div className="text-wrapper-4">Lupa Password?</div>
          <div className="text-wrapper-5">Anda terdeteksi orang luar.</div>
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-6">LOGIN AKUN</div>
            </div>
          </div>
          <div className="text-wrapper-7">Staff Login.</div>
          <img className="diamond" alt="Diamond" src={dmn} />
          <div className="elm">
            <div className="ellipse" />
            <div className="ellipse-2" />
          </div>
          <img className="img" alt="Group" src={gr} />
          <div className="login">
          </div>
        </div>
        <div className="overlap-3">
          <div className="overlap-4">
            <div className="ellipse-3" />
            <img className="median" alt="Median" src={lg} />
          </div>
          <div className="median-skill">MedianSkill</div>
        </div>
      </div>
    </div>
  );
};

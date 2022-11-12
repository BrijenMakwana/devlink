import React from "react";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-container">
      <header className="header-container">
        <img
          src={require("../assets/images/devlink.png")}
          alt="devlink"
          className="logo-image"
        />
      </header>

      {/* tagline */}
      <h1 className="main-tagline">
        Create beautiful developer link pages
        <span className="time-text"> in minutes.</span>
      </h1>

      {/* email input */}
      <div className="email-input-container">
        <input
          type="text"
          placeholder="enter your email"
          className="email-input"
        />
        <div className="email-btn-container">
          <span className="email-btn-text">get login link</span>
        </div>
      </div>

      {/* gif */}
      <div className="video-demo-container">
        <img
          src={require("../assets/images/a.gif")}
          alt="video"
          className="video-demo"
        />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./HomePage.css";
import {
  provider,
  GithubAuthProvider,
  signInWithPopup,
  auth,
  onAuthStateChanged,
} from "../firebase/index";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        navigate(`/edit/${user.email}`);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const signInWithGithub = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;

        if (user) {
          navigate(`/edit/${user.email}`);
        }

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };

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
        <div className="email-btn-container" onClick={signInWithGithub}>
          <span className="email-btn-text">get login link</span>
        </div>
      </div>

      {/* gif */}
      {/* <div className="video-demo-container">
        <img
          src={require("../assets/images/a.gif")}
          alt="video"
          className="video-demo"
        />
      </div> */}
    </div>
  );
}

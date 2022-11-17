import React, { useEffect } from "react";
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
        navigate(`/edit/${user.email}`);
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
        alert(errorMessage);
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

      <div className="git-btn-container" onClick={signInWithGithub}>
        <img
          src={require("../assets/images/github.png")}
          className="btn-image"
          alt="github"
        />
        <span className="git-btn-text">sign in</span>
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

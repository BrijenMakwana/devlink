import React from "react";
import DevLink from "../components/DevLink";
import TechStack from "../components/TechStack";
import SideBar from "../components/SideBar";
import "./DevDashboard.css";

export default function DevDashboard() {
  return (
    <div className="main-container">
      <SideBar />
      {/* developer details */}
      <div className="dev-container">
        {/* profile picture */}
        <img
          src="https://avatars.githubusercontent.com/u/96004700?v=4"
          className="profile-image"
          alt="profile"
        />
        {/* developer name */}
        <h1 className="dev-name">Brijen Makwana</h1>

        {/* developer intro */}
        <p className="dev-intro">
          I'm a Software Developer always looking to build cool projects and
          work with awesome people!
        </p>

        {/* dev tech stacks */}
        <div className="tech-stacks">
          <TechStack />
          <TechStack />
          <TechStack />
          <TechStack />
          <TechStack />
        </div>

        {/* dev links */}
        <div className="dev-links">
          <DevLink />
          <DevLink />
          <DevLink />
          <DevLink />
        </div>
      </div>
    </div>
  );
}

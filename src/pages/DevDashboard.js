import React from "react";
import DevLink from "../components/DevLink";
import TechStack from "../components/TechStack";
import "./DevDashboard.css";

export default function DevDashboard() {
  return (
    <div className="main-container">
      {/* developer details */}
      <div className="dev-container">
        {/* profile picture */}
        <img
          src="https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
        <TechStack />

        {/* dev links */}
        <DevLink />
      </div>
    </div>
  );
}

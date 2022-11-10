import { useState } from "react";
import DevLink from "../components/DevLink";
import TechStack from "../components/TechStack";
import SideBar from "../components/SideBar";
import "./DevDashboard.css";

export default function DevDashboard() {
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [techStacks, setTechStacks] = useState([]);
  const [devLinks, setDevLinks] = useState([]);
  const [linkTitle, setLinkTitle] = useState("");
  const [link, setLink] = useState("");

  return (
    <div className="main-container">
      <SideBar
        profile={profile}
        setProfile={setProfile}
        setName={setName}
        name={name}
        introduction={introduction}
        setIntroduction={setIntroduction}
        linkTitle={linkTitle}
        setLinkTitle={setLinkTitle}
        link={link}
        setLink={setLink}
      />
      {/* developer details */}
      <div className="dev-container">
        {/* profile picture */}
        <img
          src={"https://avatars.githubusercontent.com/u/96004700?v=4"}
          className="profile-image"
          alt="profile"
        />
        {/* developer name */}
        <h1 className="dev-name">{name}</h1>

        {/* developer intro */}
        <p className="dev-intro">{introduction}</p>

        {/* dev tech stacks */}
        <div className="tech-stacks"></div>

        {/* dev links */}
        <div className="dev-links"></div>
      </div>
    </div>
  );
}

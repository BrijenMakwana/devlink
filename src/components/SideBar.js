import React from "react";
import "./SideBar.css";
import { app, db, collection, addDoc } from "../firebase/index";

export default function SideBar(props) {
  const {
    profile,
    setProfile,
    name,
    setName,
    introduction,
    setIntroduction,
    techStackString,
    setTechStackString,
    techStacks,
    setTechStacks,
    linkTitle,
    setLinkTitle,
    link,
    setLink,
  } = props;

  const splitTechStack = (e) => {
    if (e.charCode === 44) {
      setTechStacks(techStackString.split(","));
    }
  };

  const publishData = async () => {
    try {
      const docRef = await addDoc(collection(db, "brijenma@gmail.com"), {
        name: name,
        introduction: introduction,
        techStacks: techStacks,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="sidebar-container">
      {/* general settings */}
      <h2 className="sidebar-heading">general</h2>
      {/* profile upload */}
      <input
        type="file"
        className="input-file"
        title="choose image"
        onClick={(e) => setProfile(e.target.value)}
      />

      {/* name */}
      <input
        type="text"
        placeholder="name"
        className="input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      {/* tel something about yourself */}
      <textarea
        rows="2"
        cols="20"
        className="input"
        placeholder="tell something about yourself"
        onChange={(e) => setIntroduction(e.target.value)}
        value={introduction}
      ></textarea>

      {/* tech stacks */}
      <h2 className="sidebar-heading">tech stacks</h2>
      <textarea
        rows="4"
        cols="20"
        className="input"
        placeholder="write down all the technoligies that you work on saperated by comma"
        onChange={(e) => setTechStackString(e.target.value)}
        onKeyPress={splitTechStack}
        value={techStackString}
      ></textarea>

      {/* links */}
      <h2 className="sidebar-heading">links</h2>
      <input
        type="text"
        placeholder="title"
        className="input"
        onChange={(e) => setLinkTitle(e.target.value)}
        value={linkTitle}
      />
      <input
        type="text"
        placeholder="link"
        className="input"
        onChange={(e) => setLink(e.target.value)}
        value={link}
      />

      <div className="btn-container add">
        <span className="btn-text add-text">add</span>
      </div>

      <div className="btn-container publish" onClick={publishData}>
        <span className="btn-text publish-text">publish</span>
      </div>
    </div>
  );
}

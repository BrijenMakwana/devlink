import React from "react";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar-container">
      {/* general settings */}
      <h2 className="sidebar-heading">general</h2>
      {/* profile upload */}
      <input type="file" className="input-file" />

      {/* name */}
      <input type="text" placeholder="name" className="input" />

      {/* tel something about yourself */}
      <textarea
        rows="2"
        cols="20"
        className="input"
        placeholder="tell something about yourself"
      ></textarea>

      {/* tech stacks */}
      <h2 className="sidebar-heading">tech stacks</h2>
      <textarea
        rows="4"
        cols="20"
        className="input"
        placeholder="write down all the technoligies that you work on saperated by comma"
      ></textarea>

      {/* links */}
      <h2 className="sidebar-heading">links</h2>
      <input type="text" placeholder="title" className="input" />
      <input type="text" placeholder="link" className="input" />

      <div className="btn-container add">
        <span className="btn-text add-text">add</span>
      </div>

      <div className="btn-container publish">
        <span className="btn-text publish-text">publish</span>
      </div>
    </div>
  );
}

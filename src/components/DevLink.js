import React from "react";
import "./DevLink.css";
import icon from "../assets/images/github.png";
import deleteIcon from "../assets/images/delete.png";

export default function DevLink(props) {
  const { title, link, removeDevLink, id } = props;
  return (
    <div className="dev-link-container">
      <div className="link-container">
        <a className="link-title" href={link} target="blank">
          {title}
        </a>
        {/* link icon */}
        <img src={icon} alt="icon" className="link-icon" />
      </div>
      {/* delete icon */}
      <img
        src={deleteIcon}
        alt="icon"
        className="link-icon delete"
        onClick={() => removeDevLink(id)}
      />
    </div>
  );
}

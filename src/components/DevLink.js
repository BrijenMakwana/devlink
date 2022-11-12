import { useEffect } from "react";
import "./DevLink.css";

import deleteIcon from "../assets/images/delete.png";

export default function DevLink(props) {
  const { title, link, removeDevLink, id } = props;

  const linkIcon =
    title === "facebook" ||
    title === "github" ||
    title === "instagram" ||
    title === "linkedin" ||
    title === "twitter" ||
    title === "youtube"
      ? title
      : "link";

  // todo: for others link, set link icon
  return (
    <div className="dev-link-container">
      <div className="link-container">
        <a className="link-title" href={link} target="blank">
          {title}
        </a>
        {/* link icon */}
        <img
          src={require(`../assets/images/${linkIcon}.png`)}
          alt="icon"
          className="link-icon"
        />
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

import "./DevLink.css";

export default function DevLink(props) {
  const { title, link, removeDevLink = undefined, id, isRemovable } = props;

  const linkTitle = title.toLowerCase();
  // check for link icon
  const linkIcon =
    linkTitle === "facebook" ||
    linkTitle === "github" ||
    linkTitle === "instagram" ||
    linkTitle === "linkedin" ||
    linkTitle === "twitter" ||
    linkTitle === "youtube"
      ? linkTitle
      : "link";

  // todo: for others link, set link icon
  return (
    <div className="dev-link-container">
      <div className="link-container">
        {/* title */}
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
      {isRemovable && (
        <img
          src={require("../assets/images/delete.png")}
          alt="icon"
          className="link-icon delete"
          onClick={() => removeDevLink(id)}
        />
      )}
    </div>
  );
}

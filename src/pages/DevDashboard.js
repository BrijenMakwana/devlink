import { useState, useEffect } from "react";
import DevLink from "../components/DevLink";
import TechStack from "../components/TechStack";
import SideBar from "../components/SideBar";
import "./DevDashboard.css";
import { db, doc, getDoc } from "../firebase/index";
import { useParams } from "react-router-dom";

export default function DevDashboard() {
  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [techStackString, setTechStackString] = useState("");
  const [techStacks, setTechStacks] = useState([]);
  const [devLinks, setDevLinks] = useState([]);
  const [linkTitle, setLinkTitle] = useState("");
  const [link, setLink] = useState("");

  const params = useParams();
  const [userEmail, setUserEmail] = useState(params.emailId);
  const [profileURL, setProfileURL] = useState(
    `https://firebasestorage.googleapis.com/v0/b/devlink-35e6e.appspot.com/o/${userEmail}_devlink?alt=media&token=963a9020-1690-4432-94c7-ac9e8838f235`
  );

  const removeDevLink = (deletedLinkId) => {
    setDevLinks(devLinks.filter((link) => link.id !== deletedLinkId));
  };

  useEffect(() => {
    getUserData();
  }, []);

  // get user data
  const getUserData = async () => {
    const docRef = doc(db, userEmail, `${userEmail}_devlink`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setName(docSnap.data().name);
      setIntroduction(docSnap.data().introduction);
      setTechStackString(docSnap.data().techStacks.toString());
      setTechStacks(docSnap.data().techStacks);
      setDevLinks(docSnap.data().devLinks);
    }
  };

  return (
    <div className="main-container">
      <SideBar
        userEmail={userEmail}
        setName={setName}
        name={name}
        introduction={introduction}
        setIntroduction={setIntroduction}
        techStackString={techStackString}
        setTechStackString={setTechStackString}
        techStacks={techStacks}
        setTechStacks={setTechStacks}
        linkTitle={linkTitle}
        setLinkTitle={setLinkTitle}
        link={link}
        setLink={setLink}
        devLinks={devLinks}
        setDevLinks={setDevLinks}
      />
      {/* developer details */}
      <div className="dev-container">
        {/* profile picture */}

        <img src={profileURL} className="profile-image" alt="profile" />

        {/* developer name */}
        <h1 className="dev-name">{name}</h1>

        {/* developer intro */}
        <p className="dev-intro">{introduction}</p>

        {/* dev tech stacks */}
        <div className="tech-stacks">
          {techStacks &&
            techStacks.map((item, index) => (
              <TechStack title={item} key={index} />
            ))}
        </div>

        {/* dev links */}
        <div className="dev-links">
          {devLinks &&
            devLinks.map((item, index) => (
              <DevLink
                title={item.title}
                link={item.link}
                key={index}
                removeDevLink={removeDevLink}
                id={item.id}
                isRemovable={true}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

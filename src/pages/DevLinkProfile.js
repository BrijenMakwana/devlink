import { useState, useEffect } from "react";
import DevLink from "../components/DevLink";
import TechStack from "../components/TechStack";
import "./DevDashboard.css";
import { db, doc, getDoc } from "../firebase/index";
import { useNavigate, useParams } from "react-router-dom";

export default function DevLinkProfile() {
  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState();
  const [techStacks, setTechStacks] = useState([]);
  const [devLinks, setDevLinks] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);

  // get user data
  const getUserData = async () => {
    const docRef = doc(db, params?.emailId, `${params?.emailId}_devlink`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setName(docSnap.data().name);
      setIntroduction(docSnap.data().introduction);
      setTechStacks(docSnap.data().techStacks);
      setDevLinks(docSnap.data().devLinks);
    } else {
      // doc.data() will be undefined in this case
      navigate("/");
    }
  };

  return (
    <div className="main-container">
      {/* developer details */}
      <div className="dev-container">
        {/* profile picture */}
        <img
          src={`https://firebasestorage.googleapis.com/v0/b/devlink-35e6e.appspot.com/o/${params?.emailId}_devlink?alt=media&token=963a9020-1690-4432-94c7-ac9e8838f235`}
          className="profile-image"
          alt="profile"
        />
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
                id={item.id}
                isRemovable={false}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./SideBar.css";
import {
  db,
  doc,
  setDoc,
  storage,
  ref,
  uploadBytes,
  auth,
  signOut,
} from "../firebase/index";
import { useParams, useNavigate } from "react-router-dom";

export default function SideBar(props) {
  const params = useParams();
  const navigate = useNavigate();

  const {
    userEmail,
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
    devLinks,
    setDevLinks,
  } = props;

  const splitTechStack = (e) => {
    if (e.charCode === 44) {
      setTechStacks(techStackString.split(","));
    }
  };

  // publish data to firebase
  const publishData = async () => {
    const user = auth.currentUser;
    if (user.email !== params.emailId) {
      alert("something went wrong!! please try login again");
      return;
    }
    if (
      name === "" ||
      introduction === "" ||
      techStackString === "" ||
      devLinks.length === 0
    ) {
      alert("please fill in all the fields");
    } else {
      try {
        const docRef = setDoc(doc(db, userEmail, `${userEmail}_devlink`), {
          name: name,
          introduction: introduction,
          techStacks: techStacks,
          devLinks: devLinks,
        });
        console.log("Document written with ID: ", docRef.id);
        alert(
          `Your profile URL is: https://devlink-page.vercel.app/${userEmail}`
        );
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  // add dev link to state
  const addDevLink = () => {
    if (linkTitle === "" || link === "") {
      alert("please fill in all the fields");
    } else {
      setDevLinks([
        ...devLinks,
        {
          id: devLinks.length === 0 ? 0 : devLinks[devLinks.length - 1].id + 1,
          title: linkTitle,
          link: link,
        },
      ]);
      setLinkTitle("");
      setLink("");
    }
  };

  // upload profile image to firebase storage
  const uploadProfileImage = async (e) => {
    const imageRef = ref(storage, `${userEmail}_devlink`);

    // 'file' comes from the Blob or File API
    uploadBytes(imageRef, e.target.files[0]).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };

  // logout
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="sidebar-container">
      {/* general settings */}
      <h2 className="sidebar-heading">general</h2>
      {/* profile upload */}
      <input
        type="file"
        className="input-file"
        label="choose image"
        accept=".jpg, .jpeg, .png"
        onChange={(e) => uploadProfileImage(e)}
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
        className="input text-area-input"
        placeholder="tell something about yourself"
        onChange={(e) => setIntroduction(e.target.value)}
        value={introduction}
      ></textarea>

      {/* tech stacks */}
      <h2 className="sidebar-heading">tech stacks</h2>
      <textarea
        rows="4"
        cols="20"
        className="input text-area-input"
        placeholder="e.g. react native, react, HTML, Javascript, ..."
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

      <div className="btn-container add" onClick={addDevLink}>
        <span className="btn-text add-text">add</span>
      </div>

      <div className="btn-container publish" onClick={publishData}>
        <span className="btn-text publish-text">publish</span>
      </div>

      <div className="btn-container publish" onClick={logout}>
        <span className="btn-text publish-text">logout</span>
      </div>
    </div>
  );
}

import "./App.css";
import DevDashboard from "./pages/DevDashboard";
import DevLinkProfile from "./pages/DevLinkProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { auth, onAuthStateChanged } from "./firebase/index";
import React, { useEffect, useState } from "react";
import NothingPage from "./pages/NothingPage";

function App() {
  const [isAllow, setIsAllow] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAllow(true);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {isAllow ? (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="edit/:emailId" element={<DevDashboard />} />
            <Route path=":emailId" element={<DevLinkProfile />} />
            <Route path="*" element={<NothingPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path=":emailId" element={<DevLinkProfile />} />
            <Route path="*" element={<NothingPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

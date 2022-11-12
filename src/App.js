import "./App.css";
import DevDashboard from "./pages/DevDashboard";
import DevLinkProfile from "./pages/DevLinkProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="edit/:emailId" element={<DevDashboard />} />
        <Route path="/:emailId" element={<DevLinkProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

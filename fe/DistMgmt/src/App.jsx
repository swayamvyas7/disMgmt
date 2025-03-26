import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing components
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/Homepage"; // Import HomePage for default route
import EmergencyNumbers from "./components/EmergencyNumbers"; // Import EmergencyNumbers page
import LoginSignupPopup from "./components/LoginSignupPopup";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} onLoginClick={togglePopup} />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Default route */}
            <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
            <Route path="/emergency-numbers" element={<EmergencyNumbers />} /> {/* Emergency Numbers route */}
          </Routes>
          <LoginSignupPopup isOpen={isPopupOpen} onClose={togglePopup} />
        </div>
      </div>
    </Router>
  );
}

export default App;

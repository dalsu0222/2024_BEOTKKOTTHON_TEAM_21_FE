import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Splash from "./pages/Splash/Splash";
import Login from "./pages/Login/Login";
import WorkSpaceHome from "./pages/WorkSpace/WorkSpaceHome";
import SecretFeedback from "./pages/WorkSpace/SecretFeedback";
import FeedbackStorage from "./pages/WorkSpace/FeedbackStorage";
import SignUp from "./pages/SignUp/SignUp";
import SignUpEnd from "./pages/SignUp/SignUpEnd";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // 2.5초 후에 스플래시 화면 숨기기

    return () => clearTimeout(timer); // 타이머 해제
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={showSplash ? <Splash /> : <Navigate to="/login" />}
          />
          <Route path="/splash" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/workspacehome" element={<WorkSpaceHome />} />
          <Route path="/feedbackstorage" element={<FeedbackStorage />} />
          <Route path="/secretfeedback" element={<SecretFeedback />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signend" element={<SignUpEnd />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

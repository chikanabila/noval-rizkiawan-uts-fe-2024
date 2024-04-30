import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./dashboard"

const ProtectedAdmin = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <div className="App-link">
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="container">
       <Dashboard/>
      </div>
    </>
  );
};

export default ProtectedAdmin;

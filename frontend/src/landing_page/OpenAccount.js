import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUserData = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (error) {
          console.error("Error parsing user data:", error);
        }
      } else {
        setUser(null);
      }
    };

    loadUserData();
    window.addEventListener("storage", (e) => {
      if (e.key === "user" || e.key === null) {
        loadUserData();
      }
    });
    window.addEventListener("userDataUpdated", loadUserData);

    return () => {
      window.removeEventListener("storage", loadUserData);
      window.removeEventListener("userDataUpdated", loadUserData);
    };
  }, []);

  const handleSignupClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      navigate("/signup");
    } catch (error) {
      console.error("Navigation error:", error);
      window.location.href = "/signup";
    }
  };

  const handleDashboardClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token) {
      const userDataParam = userData ? encodeURIComponent(userData) : '';
      window.location.href = `http://localhost:3000?token=${encodeURIComponent(token)}${userData ? '&user=' + userDataParam : ''}`;
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="container p-3 p-md-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-3 mt-md-5">Open a Investa account</h1>
        <p className="px-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        {user ? (
          <button
            type="button"
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "100%", maxWidth: "300px", margin: "0 auto", cursor: "pointer" }}
            onClick={handleDashboardClick}
          >
            Start Trading
          </button>
        ) : (
          <button
            type="button"
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "100%", maxWidth: "300px", margin: "0 auto", cursor: "pointer" }}
            onClick={handleSignupClick}
          >
            Sign up Now
          </button>
        )}
      </div>
    </div>
  );
}

export default OpenAccount;
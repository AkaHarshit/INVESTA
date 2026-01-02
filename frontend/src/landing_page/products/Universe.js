import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
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
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mt-3 mt-md-5">The Investa Universe</h1>
        <p className="mt-3 px-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" style={{ width: "100%", maxWidth: "200px", height: "auto" }} />
          <p className="text-small text-muted mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{ width: "40%", maxWidth: "150px", height: "auto" }} />
          <p className="text-small text-muted mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: "35%", maxWidth: "120px", height: "auto" }} />
          <p className="text-small text-muted mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{ width: "50%", maxWidth: "180px", height: "auto" }} />
          <p className="text-small text-muted mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/tijori.svg" style={{ width: "35%", maxWidth: "120px", height: "auto" }} />
          <p className="text-small text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{ width: "45%", maxWidth: "160px", height: "auto" }} />
          <p className="text-small text-muted mt-3">
            An online platform that enables investors to discover, analyze, and
            invest in high-quality fixed-income instruments.
          </p>
        </div>
        {user ? (
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "100%", maxWidth: "300px", margin: "0 auto", cursor: "pointer" }}
            onClick={handleDashboardClick}
          >
            Explore Dashboard
          </button>
        ) : (
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "100%", maxWidth: "300px", margin: "0 auto", cursor: "pointer" }}
            onClick={handleSignupClick}
          >
            Sign up for free
          </button>
        )}
      </div>
    </div>
  );
}

export default Universe;

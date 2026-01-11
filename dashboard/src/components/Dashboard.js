import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import "./Dashboard.css";

const Dashboard = () => {
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);

  // Close watchlist when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth <= 768) {
        const watchlist = document.querySelector(".watchlist-container");
        const toggleButton = document.querySelector(".mobile-menu-toggle");
        
        if (
          isWatchlistOpen &&
          watchlist &&
          !watchlist.contains(event.target) &&
          toggleButton &&
          !toggleButton.contains(event.target)
        ) {
          setIsWatchlistOpen(false);
        }
      }
    };

    if (isWatchlistOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isWatchlistOpen]);

  // Close watchlist on window resize if screen becomes larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsWatchlistOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when watchlist is open on mobile
  useEffect(() => {
    if (window.innerWidth <= 768) {
      if (isWatchlistOpen) {
        document.body.classList.add("watchlist-open");
      } else {
        document.body.classList.remove("watchlist-open");
      }
    }

    return () => {
      document.body.classList.remove("watchlist-open");
    };
  }, [isWatchlistOpen]);

  const toggleWatchlist = () => {
    setIsWatchlistOpen(!isWatchlistOpen);
  };

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        {isWatchlistOpen && (
          <div
            className="watchlist-overlay active"
            onClick={() => setIsWatchlistOpen(false)}
          />
        )}
        <WatchList isOpen={isWatchlistOpen} onClose={() => setIsWatchlistOpen(false)} />
        <div className="content">
          <Routes>
            <Route index element={<Summary />} />
            <Route path="orders" element={<Orders />} />
            <Route path="holdings" element={<Holdings />} />
            <Route path="positions" element={<Positions />} />
            <Route path="funds" element={<Funds />} />
            <Route path="apps" element={<Apps />} />
          </Routes>
        </div>
        <button
          className={`mobile-menu-toggle ${isWatchlistOpen ? "active" : ""}`}
          onClick={toggleWatchlist}
          aria-label="Toggle watchlist"
        >
          {isWatchlistOpen ? "✕" : "☰"}
        </button>
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;
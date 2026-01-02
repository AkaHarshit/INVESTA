import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-3 p-md-5 mb-5">
      <div className="row text-center">
        <div className="col-12">
          <h1 className="mt-3 mt-md-5 px-3">404 Not Found</h1>
          <p className="px-3">Sorry, the page you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary mt-4">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

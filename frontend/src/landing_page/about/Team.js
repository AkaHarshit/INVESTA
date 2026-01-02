import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-3 border-top">
        <h1 className="text-center">People</h1>
      </div>
      <div
        className="row p-3 mt-3 mt-md-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-12 col-md-6 p-3 text-center mb-4 mb-md-0">
          <img
            src="media/images/harshitSingh.jpg"
            alt="Team Image"
            style={{ width: "50%", maxWidth: "250px", borderRadius: "100%", height: "auto" }}
          />
          <h4 className="mt-3 mt-md-5">Harshit Singh</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-12 col-md-6 p-3">
          <p>
            Harshit bootstrapped and founded Investa in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Investa has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p> Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;

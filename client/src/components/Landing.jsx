import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>The DOGS are HERE</h1>
      <Link to="/home">
        <button>¡Take me with'em!</button>
      </Link>
    </div>
  );
}
export default Landing;

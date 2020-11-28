import React from "react";
import Hero from "../components/BeachStyle";
import Beach from "../components/Beach";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Hero>
      <Beach title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Beach>
    </Hero>
  );
};

export default Error;

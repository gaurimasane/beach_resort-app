import React from "react";
import Hero from "../components/BeachStyle";
import Beach from "../components/Beach";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
          <Link to="/" className="btn-primary">
            return home
          </Link>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;

import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((store) => store.flightSlice);
  return (
    <header className="d-flex align-items-center justify-content-between py-2 px-5">
      <div className="d-flex align-items-center gap-3">
        <img src="/plane.png" width={50} height={50} />
        <h3 className="fs-3">Flight Radar</h3>
      </div>
      <p className="fs-5 fw-bold">
        {state.isLoading
          ? "Flights are calculating..."
          : state.isError
          ? "Something went wrong!"
          : state.flights.length + " " + "flights found"}
      </p>
    </header>
  );
};

export default Header;

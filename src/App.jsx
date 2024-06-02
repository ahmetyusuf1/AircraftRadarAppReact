import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightAction";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [isMapView, setIsMapView] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailID, setDetailID] = useState(null);
  const dispatch = useDispatch();

  const openModal = (id) => {
    setDetailID(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setDetailID(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <>
      <Header />
      <div className="d-flex align-items-center justify-content-center gap-1">
        <button
          onClick={() => setIsMapView(true)}
          className={
            isMapView
              ? "text-bg-dark py-2 px-4 rounded-1 border border-2"
              : "text-bg-light py-2 px-4 rounded-1 border border-2"
          }
        >
          Map View
        </button>
        <button
          onClick={() => setIsMapView(false)}
          className={
            !isMapView
              ? "text-bg-dark py-2 px-4 rounded-1 border border-2"
              : "text-bg-light py-2 px-4 rounded-1 border border-2"
          }
        >
          List View
        </button>
      </div>
      {isMapView ? (
        <MapView openModal={openModal} />
      ) : (
        <ListView openModal={openModal} />
      )}

      {isModalOpen && <Modal detailID={detailID} closeModal={closeModal} />}
    </>
  );
};

export default App;

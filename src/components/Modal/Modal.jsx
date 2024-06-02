import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { secondOptions } from "../../constants";
import ModalDetail from "./ModalDetail";
import ModalLoader from "./ModalLoader";
import { useDispatch } from "react-redux";
import { setTrail } from "../../redux/slices/flightSlice";

const Modal = ({ closeModal, detailID }) => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(null);

    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailID}`,
        secondOptions
      )
      .then((response) => {
        dispatch(setTrail(response.data.trail));
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, [detailID]);
  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <p className="d-flex justify-content-end">
          <IoMdClose
            onClick={closeModal}
            role="button"
            size={28}
            className="text-light cursor-pointer"
          />
        </p>
        {!data ? (
          <ModalLoader />
        ) : !data.airport.origin || !data.airport.destination ? (
          <div className="d-flex flex-column align-items-center">
            <p className="text-secondary fs-5">{data.airline?.name}</p>
            <p className="fs-4">The data of this flight is confidential!</p>
          </div>
        ) : (
          <>
            <ModalDetail data={data} />
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;

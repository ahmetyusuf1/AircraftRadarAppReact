import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

const ListView = ({ openModal }) => {
  console.log(openModal);
  const { flights } = useSelector((store) => store.flightSlice);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;

  const currentFlights = flights.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(flights.length / itemsPerPage);

  const handlePageClick = (e) => {
    const newOffset = e.selected * itemsPerPage;
    setItemOffset(newOffset);
  };
  return (
    <div className="p-4 mt-4">
      <table className="table table-secondary table-hover table-responsive">
        <thead>
          <tr>
            <th>ID</th>
            <th>code</th>
            <th>lat</th>
            <th>lng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentFlights.map((flight, i) => (
            <tr key={i}>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button
                  onClick={() => openModal(flight.id)}
                  className="btn btn-warning"
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<IoIosArrowForward size={25} />}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel={<IoIosArrowBack size={25} />}
        className="pagination"
      />
    </div>
  );
};

export default ListView;

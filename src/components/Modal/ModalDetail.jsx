import moment from "moment";

const ModalDetail = ({ data }) => {
  const formatDate = (time) => {
    const date = new Date(time * 1000);

    return moment(date).calendar();
  };
  return (
    <>
      <h2>{data.aircraft.model.text}</h2>
      <h4>{data.aircraft.model.code}</h4>

      <p>{data.aircraft.registration}</p>

      <img src={data.aircraft.images.medium[1].src} />

      <div className="d-flex gap-1">
        <p>Company:</p>
        <p className="fw-bold">{data.airline.name}</p>
      </div>

      <div>
        <div className="d-flex gap-1">
          <p>From:</p>
          <p className="fw-bold">{data.airport.origin.name}</p>
        </div>
        <div className="d-flex gap-1">
          <p>To:</p>
          <p className="fw-bold">{data.airport.destination.name}</p>
        </div>
      </div>

      <div>
        <div className="d-flex gap-1">
          <p>Departure Time:</p>
          <p>{formatDate(data.time.scheduled.departure)}</p>
        </div>
        <div className="d-flex gap-1">
          <p>Arrival Time:</p>
          <p>{formatDate(data.time.scheduled.arrival)}</p>
        </div>
      </div>

      <div className={data.status.icon}>
        <p className="fw-bold text-center">{data.status.text}</p>
      </div>
    </>
  );
};

export default ModalDetail;

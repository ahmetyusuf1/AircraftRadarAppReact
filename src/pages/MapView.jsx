import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { clearTrail } from "../redux/slices/flightSlice";

const MapView = ({ openModal }) => {
  const { flights, trail } = useSelector((store) => store.flightSlice);
  const dispatch = useDispatch();

  return (
    <MapContainer
      center={[39.149702, 35.420686]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {flights.map((flight, i) => (
        <Marker key={i} position={[flight.lat, flight.lng]}>
          <Popup>
            <div className="d-flex flex-column gap-2">
              <span className="text-center">Code: {flight.code}</span>
              <button
                onClick={() => openModal(flight.id)}
                className="btn btn-sm btn-outline-warning text-dark border border-none rounded"
              >
                Detail
              </button>
              {trail.length > 0 && (
                <button
                  onClick={() => dispatch(clearTrail())}
                  className="btn btn-sm btn-outline-danger text-dark border border-none rounded"
                >
                  Delete Route
                </button>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
      <Polyline positions={trail} />
    </MapContainer>
  );
};

export default MapView;

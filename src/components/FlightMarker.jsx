import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
// import "leaflet-rotatedmarker";

const planeIcon = new L.Icon({
    iconUrl: "/public/images/plane.png",
    iconSize: [30, 30],
    iconAnchor: [15, 15],
});

const FlightMarker = ({ flight }) => {
    const lat = flight[6];
    const lon = flight[5];
    const heading = flight[10] || 0;

    if (!lat || !lon) return null;

    return (
        <Marker
            position={[lat, lon]}
            icon={planeIcon}
            rotationAngle={heading}
            rotationOrigin="center"
        >
            <Popup>
                <div>
                    <p><strong>Callsign:</strong> {flight[1]}</p>
                    <p><strong>Country:</strong> {flight[2]}</p>
                    <p><strong>Altitude:</strong> {flight[7]} m</p>
                    <p><strong>Speed:</strong> {flight[9]} m/s</p>
                </div>
            </Popup>
        </Marker>
    );
};

export default FlightMarker;
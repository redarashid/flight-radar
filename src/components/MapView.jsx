import { MapContainer, TileLayer } from "react-leaflet";
import { useState } from "react";
import useFlights from "../hooks/useFlights";
import FlightMarker from "./FlightMarker";
import Sidebar from "./Sidebar";

const MapView = () => {
    const { flights, loading, error } = useFlights();
    const [selectedCountry, setSelectedCountry] = useState("All");

    const filteredFlights =
        selectedCountry === "All"
            ? flights
            : flights.filter((f) => f[2] === selectedCountry);

    return (
        <div style={{ position: "relative" }}>

            {/* Counter */}
            <div
                style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    zIndex: 1000,
                    background: "white",
                    padding: "10px",
                    borderRadius: "8px",
                    fontWeight: "bold"
                }}
            >
                Flights in Air: {filteredFlights.length}
            </div>

            {/* Sidebar */}
            <Sidebar flights={flights} setSelectedCountry={setSelectedCountry} />

            <MapContainer
                center={[30.0444, 31.2357]}
                zoom={6}
                style={{ height: "100vh" }}
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}

                {filteredFlights.map((flight, index) => (
                    <FlightMarker key={index} flight={flight} />
                ))}
            </MapContainer>
        </div>
    );
};

export default MapView;
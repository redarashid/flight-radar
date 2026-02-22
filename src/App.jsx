import { MapContainer, TileLayer } from "react-leaflet";

function App() {
  return (
    <MapContainer center={[30.0444, 31.2357]} zoom={6} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default App;
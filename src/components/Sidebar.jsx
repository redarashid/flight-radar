const Sidebar = ({ flights, setSelectedCountry }) => {
    const countries = [...new Set(flights.map(f => f[2]))];

    return (
        <div style={{ position: "absolute", right: 0, top: 0, zIndex: 1000 }}>
            <select onChange={(e) => setSelectedCountry(e.target.value)}>
                <option value="All">All Countries</option>
                {countries.map((country, index) => (
                    <option key={index} value={country}>
                        {country}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Sidebar;
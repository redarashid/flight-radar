import axios from "axios";

export const fetchFlights = async () => {
  const res = await axios.get("https://opensky-network.org/api/states/all");

  return res.data.states;
};

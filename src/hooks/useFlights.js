import { useEffect, useState } from "react";
import { fetchFlights } from "../services/api";

const useFlights = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadFlights = async () => {
    try {
      const data = await fetchFlights();
      setFlights(data || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch flights");
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await loadFlights();
    };
    fetchData();
    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, []);

  return { flights, loading, error };
};

export default useFlights;

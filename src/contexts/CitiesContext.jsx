import { createContext, useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:8000';

//! create context
const CitiesContext = createContext();

//! provider component
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert('There was an error loading data...');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert('There was an error loading data...');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    //! provide value to consumers
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        getFlag,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function getFlag(flag) {
  if (flag === undefined) return;
  const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join('');

  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
}

export { CitiesProvider, CitiesContext };

import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";
import Pagination from "./components/Pagination";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);

  async function getAllCountries() {
    setLoading(true);

    const response = await axios.get("https://restcountries.com/v3.1/all");
    setCountries(response.data);

    setLoading(false);
  }

  useEffect(() => {
    getAllCountries();
  }, []);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex);

  const pagination = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Countries countries={currentCountry} loading={loading} />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        pagination={pagination}
      />
    </>
  );
}

export default App;

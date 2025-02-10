import { useState, useEffect } from 'react';
import CountrySearch from './components/CountrySearch';
import CountryList from './components/CountryList';
// import { CountryDetails } from './components/CountryDetails';
import axios from 'axios';

const App = () => {
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState(null);

  const hook = () => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data);
      });
  };

  useEffect(hook, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <CountrySearch
        value={value}
        handleChange={handleChange} />
      <CountryList countries={countries} value={value} />
      {/* <CountryDetails countryinfo={countryInfo}/> */}
    </>
  )
};

export default App;
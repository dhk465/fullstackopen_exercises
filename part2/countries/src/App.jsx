import { useState, useEffect } from 'react';
import CountrySearch from './components/CountrySearch';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
import countryService from './services/countries';

const App = () => {
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    countryService.getAll().then(initialCountries => {
        setCountries(initialCountries);
      });
  }, []);

  useEffect(() => {
    matchCountry();
  }, [value, countries]);
  
  const matchCountry = () => {
    const matchedCountries = countries.filter(country =>
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );

    if (matchedCountries.length === 1) {
          setCountry(matchedCountries[0]);
    } else {
      setCountry('');
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
      };

  return (
    <>
      <CountrySearch
        value={value}
        handleChange={handleChange} />
      <CountryList countries={countries} value={value} />
{country && <CountryDetails countries={countries} country={country} />}
    </>
  )
};

export default App;
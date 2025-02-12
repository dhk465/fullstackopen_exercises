const CountryList = ({ countries, value, showDetails }) => {
  return (
    <ul>
      {value === "" ? [] : countries.filter(country => {
        return country.name.common.toLowerCase().includes(value.toLowerCase());
      }).map(country => {
        return (
          <li key={country.name.common}>
            {country.name.common} <button onClick={() => showDetails(country)}>show</button>
          </li>
        );
      })}
    </ul>
  );
};

export default CountryList;
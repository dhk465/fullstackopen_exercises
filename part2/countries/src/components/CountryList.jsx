const CountryList = ({ countries, value }) => {

  return (
    <ul>
      {value === "" ? [] : countries.filter(country => {
        return country.name.common.toLowerCase().includes(value.toLowerCase());
      }).map(country => {
        return (
          <li key={country.name.common}>
            {country.name.common}
          </li>
        );
      })}
    </ul>
  );
};

export default CountryList;
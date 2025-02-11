const CountryDetails = ({ countries, country }) => {

  if (country === '') {
    return <div></div>;
  } else {
    const countryInfo = countries.find(c => c.name.common === country.name.common);
    
    const name = countryInfo.name.common;
    const capital = countryInfo.capital[0];
    const area = countryInfo.area;
    const languages = Object.values(countryInfo.languages);
    const flag = countryInfo.flags.png;

    return (
      <div>
        <h1>{name}</h1>
        <p>Capital: {capital}</p>
        <p>Area: {area} km²</p>
        <h3>Languages</h3>
        <ul>
          {languages.map(language => (
            <li key={language}>
              {language}
            </li>
          ))}
        </ul>
        <img src={flag} alt={`Flag of ${name}`} />
      </div>
    );
  }
};

export default CountryDetails;
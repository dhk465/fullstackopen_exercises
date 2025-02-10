const CountrySearch = ({ value, handleChange }) => {
  return (
    <>
      Find countries: <input value={value} onChange={handleChange} />
    </>
  );
};

export default CountrySearch;
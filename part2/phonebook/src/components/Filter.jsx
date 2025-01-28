const Filter = ({searchValue, handleValueChange}) => {
  return (
    <>
      filter shown with: <input value={searchValue} onChange={handleValueChange}/>
    </>
  );
};

export default Filter;
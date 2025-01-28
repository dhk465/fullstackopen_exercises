const DisplayContacts = ({ persons, filterKeyword }) => {
  return (
    <ul>
      {persons.filter(person => {
          return (
            person.name.toLowerCase().includes(filterKeyword.toLowerCase())
          );
        }).map(person => {
          return (
            <li key={person.id}>{person.name} {person.number}</li>
          );
        })}
    </ul>
  );
};

export default DisplayContacts;
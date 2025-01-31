const DisplayContacts = ({ persons, filterKeyword, removePerson }) => {
  return (
    <ul>
      {persons.filter(person => {
          return (
            person.name.toLowerCase().includes(filterKeyword.toLowerCase())
          );
        }).map(person => {
          return (
            <li key={person.id}>
              {person.name} {person.number} 
              <button onClick={() => removePerson(person.id)}>delete</button>
            </li>
          );
        })}
    </ul>
  );
};

export default DisplayContacts;
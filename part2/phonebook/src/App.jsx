import { useState } from 'react';
import DisplayContacts from './components/DisplayContacts';

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: 1 },
  ]);
  const [newName, setNewName] = useState("");

  const addPerson = () => {
    const personObject = {
      name: newName,
      id: persons.length + 1,
    };
    setPersons(persons.concat(personObject));
    setNewName('');
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const validateName = (event) => {
    event.preventDefault();
    const nameList = persons.filter(person => person.name === newName);
    if (nameList.length > 0) {
      alert(`${newName} has already been added to the phonebook`);
    } else {
      addPerson(event);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={validateName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <DisplayContacts persons={persons} />
    </div>
  );
};

export default App;
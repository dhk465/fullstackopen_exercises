import { useState } from 'react';
import DisplayContacts from './components/DisplayContacts';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [searchValue, setSearchValue] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = () => {
    const personObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    };
    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  };

  const handleValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const validateName = (event) => {
    event.preventDefault();
    const nameExists = persons.some(person => person.name === newName);
    if (nameExists) {
      alert(`${newName} has already been added to the phonebook`);
    } else {
      addPerson(event);
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Search</h2>
        filter shown with <input value={searchValue} onChange={handleValueChange}/>
      <h2>Add a new contact</h2>
      <form onSubmit={validateName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <DisplayContacts persons={persons} filterKeyword={searchValue}/>
    </div>
  );
};

export default App;
import { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import DisplayContacts from './components/DisplayContacts';
import NewContactForm from './components/NewContactForm';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const hook = () => {
    axios
      .get('http://localhost:3001/persons') // first, get the data from the server
      .then(response => { // then, set the data to the state
        setPersons(response.data);
      });
  };

  useEffect(hook, []); // call the hook function only once

  const addPerson = () => {
    const personObject = {
      name: newName,
      id: (persons.length + 1).toString(),
      number: newNumber,
    };

    axios
      .post(`http://localhost:3001/persons`, personObject)
      .then(response => {
        setPersons(persons.concat(response.data));
      });

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
      <Filter
        searchValue={searchValue}
        handleValueChange={handleValueChange} />
      <h2>Add a new contact</h2>
      <NewContactForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        validateName={validateName}
        newNumber={newNumber}
        newName={newName} />
      <h2>Numbers</h2>
      <DisplayContacts
        persons={persons}
        filterKeyword={searchValue} />
    </div>
  );
};

export default App;
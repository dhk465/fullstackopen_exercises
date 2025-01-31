import { useEffect, useState } from 'react';
import contactService from './services/person';
import countService from './services/allTimeContactCount';
import Filter from './components/Filter';
import DisplayContacts from './components/DisplayContacts';
import NewContactForm from './components/NewContactForm';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const hook = () => {
    contactService.getAllContacts()
      .then(initialContacts => {
        setPersons(initialContacts);
      }); 
  };

  useEffect(hook, []);

  const addPerson = () => {
    countService.updateCount()
      .then(updatedCount => { 
        const personObject = {
          name: newName,
          id: updatedCount,
          number: newNumber,
        };
        contactService.createContact(personObject)
          .then(newPerson => {
            setPersons(persons.concat(newPerson));
          });
    });
    setNewName('');
    setNewNumber('');
  };

  const removePerson = () => {
    
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
        filterKeyword={searchValue} 
        removePerson={removePerson}/>
    </div>
  );
};

export default App;
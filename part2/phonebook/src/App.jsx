import { useEffect, useState } from 'react';
import contactService from './services/person';
import Filter from './components/Filter';
import DisplayContacts from './components/DisplayContacts';
import NewContactForm from './components/NewContactForm';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newId, setNewId] = useState(0);

  const hook = () => {
    contactService.getAll()
      .then(initialContacts => {
        setPersons(initialContacts);

        // Get the highest id in the list of contacts for a unique new id
        let highestId = initialContacts.reduce((max, contact) => {
          let id = Number(contact.id);
          return (id > max ? id : max)
        }, 0);
        setNewId(highestId + 1);
      });
  };

  useEffect(hook, []);

  const addPerson = () => {

    const personObject = {
      name: newName,
      id: String(newId + 1),
      number: newNumber,
    };
    
    contactService.create(personObject)
      .then(newPerson => {
        setPersons(persons.concat(newPerson));
      });

    setNewId(newId + 1);
    setNewName('');
    setNewNumber('');
  };

  const removePerson = (id) => {
    const personToDelete = persons.find(person => person.id === id);
    const confirm = window.confirm(`Delete ${personToDelete.name} ?`);
    
    if (confirm) {
      contactService.deleteContact(id)
      .then(returnedData => {
        setPersons(persons.filter(person => person.id != returnedData.id));
      });
    }
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
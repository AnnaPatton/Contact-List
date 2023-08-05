import React, { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';

function App() {

  // removed placeholder info
const contacts = []; 

  console.log("Contacts: ", contacts);

  return (
    <>
       <ContactList contacts={contacts} />
    </>
  );
}

export default App;
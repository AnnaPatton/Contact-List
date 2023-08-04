import React, { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';

function App() {

const contacts = [
  // Just placeholder contact info
  { name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
  ]; 

  console.log("Contacts: ", contacts);

  return (
    <>
       <ContactList contacts={contacts} />
    </>
  );
}

export default App;
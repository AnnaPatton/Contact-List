import React, { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import SelectedContact from "./components/SelectedContact";

/* Goal: 2 separate windows (1 = contact list, 2 = selected contact) and fetch external data from API 
* Create state variable to store ID of selected contact
* Both views/components need access to single state value --> put state value in parent comp then use props to pass data to children
* Put state variable in App.jsx - allows us to render ContactList and/or SelectedContact comps + pass state value and setter to both
* Create state variables for selectedContactId and setSelectedContactId then set default value to null 
 */

export default function App() {

    const [selectedContactId, setSelectedContactId] = useState(null);
  
    // removed placeholder info
  const contacts = []; 
  
    console.log("Contacts: ", contacts);
  
   {/* Conditionally render ContactList comp if selectedContactId = null 
   * Write a ternary statement that evaluates the selectedContactId. If it is a truthy value, for now, render a div with a short message. If selectedContactId is falsey, render the ContactList component.*/}
  
  return (
      <>
        {selectedContactId ? (
          <div>Selected Contact View</div>
        ) : (
          // passing the setSelectedContactId to the setSelectedContactId component
          <ContactList setSelectedContactId={setSelectedContactId}/>
        )}
      </>
    );
  } 
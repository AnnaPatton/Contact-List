import React, { useState, useEffect } from "react";

// deconstruct selectedContactId and setSelectedContactId from props

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {

// Create state values, single contact and setContact
    const [contact, setContact] = useState([]);

/* Call useEffect and pass it a callback and empty dependency array then
Define a function that uses the fetch API, and passes its URL with the selectedContactId added using template literals */
useEffect(() => {
    async function fetchContact() {
        try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
            const result = await response.json();
            setContact(result);
        } catch (error) {
            console.error(error);
        }
    }
    fetchContact();
  }, []);

console.log("Contact:", contact);

// back button 
const backButton = () => {
    setSelectedContactId(null);
};

  return (
    <div>
        <h3>Additional Contact Info:</h3>
        <p>Contact ID: {selectedContactId}</p>
        <p>Name: {contact.name}</p>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>Username: {contact.username}</p>
        <p>Website: {contact.website}</p>

    {/* back button */}
        <button onClick={backButton}>Return</button>

    </div>

    );
} 
import { useState } from "react";
import ContactRow from "./ContactRow";
import {useEffect} from 'react';

// Passed the setSelectedContactId into ContactList component - aka we deconstructed the function from props from within the ContactList component 
export default function ContactList({ setSelectedContactId }) {

// changed useState(dummyContacts) -> useState([]) with an empty array
    const [contacts, setContacts] = useState([]);

// Call the hook after the useState invocation and before the return statement
  useEffect(()=>{
    async function fetchContacts() {
      try {
        const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  },[]);

  // Console log your contacts state variable to double check that the data is held in state.
// console.log(contacts);

return (
  // added styling
  <table style={{fontSize: "15px"}}>
    <thead>
      <tr>
        <th colSpan="3" style={{fontSize: "25px"}}>Contact List</th>
      </tr>
    </thead>
    <tbody>
  {/* added styling */}
      <tr style={{fontWeight: "bold"}}>
        <td>Name</td>
        <td>Email</td>
        <td>Phone</td>
      </tr>
      {contacts.map((contact) => {
        // passed setSelectedContactId as a prop to ContactRow
        return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>;
      })}
    </tbody>
  </table>
);
}
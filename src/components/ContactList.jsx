import { useState } from "react";
import ContactRow from "./ContactRow";

// At the top of you ContactList.jsx file, import the useEffect hook from react.
import {useEffect} from 'react';

// commented out dummyContacts
/* const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
]; */

export default function ContactList() {

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
console.log(contacts);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} />;
        })}
      </tbody>
    </table>
  );
}
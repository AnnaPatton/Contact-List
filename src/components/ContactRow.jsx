// Passed the setSelectedContactId function into ContactRow comp
export default function ContactRow({ setSelectedContactId, contact }) {
    return (

      // Added onClick to the tr element. Pass it a callback function that uses the setSelectedContactId with the current contact's ID.
      <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }
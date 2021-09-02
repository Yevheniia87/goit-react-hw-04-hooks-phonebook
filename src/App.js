import "./App.css";
import shortid from "shortid";

import Forma from "./component/Forma/Forma.js";
import ContactsList from "./component/ContactList/ContactsList.js";
import Filter from "./component/Filter/Filter.js";
import { useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const addContact = ({ name, number }) => {
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    setContacts(({ contacts }) => [newContact, ...contacts]);
  };

  const checkContact = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };
  const removeContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.contacts.filter((contact) => contact.id !== contactId)
    );
  };

  return (
    <>
      <section>
        <h2>Phonebook</h2>
        <Forma onSubmit={addContact} />
      </section>
      <section>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />

        <ContactsList contacts={checkContact()} onDelete={removeContact} />
      </section>
    </>
  );
}
// export default class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };
//   addContact = ({ name, number }) => {
//     if (
//       this.state.contacts.find(
//         (contact) => contact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       alert(`${name} is already in contacts`);
//       return;
//     }
//     const newContact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };
//     this.setState(({ contacts }) => ({
//       contacts: [newContact, ...contacts],
//     }));
//   };

//   checkContact = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };
//   changeFilter = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   removeContact = (contactId) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter(
//         (contact) => contact.id !== contactId
//       ),
//     }));
//   };
//   render() {
//     const { filter } = this.state;
//     return (
//       <>
//         <section>
//           <h2>Phonebook</h2>
//           <Forma onSubmit={this.addContact} />
//         </section>
//         <section>
//           <h2>Contacts</h2>
//           <Filter value={filter} onChange={this.changeFilter} />

//           <ContactsList
//             contacts={this.checkContact()}
//             onDelete={this.removeContact}
//           />
//         </section>
//       </>
//     );
//   }
// }

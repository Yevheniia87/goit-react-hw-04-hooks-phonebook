import shortid from "shortid";
import styles from "./forma.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Forma({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number });
    resetForm();
  };
  const resetForm = () => {
    setName("");
    setNumber("");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor={nameInputId}>
        Name
        <input
          className={styles.input}
          id={nameInputId}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        ></input>
      </label>
      <label className={styles.label} htmlFor={numberInputId}>
        Number
        <input
          className={styles.input}
          id={numberInputId}
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        ></input>
      </label>
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
// export default class Forma extends Component {
//   state = {
//     contacts: [],
//     name: "",
//     number: "",
//   };
//   nameInputId = shortid.generate();
//   numberInputId = shortid.generate();

//   handleChange = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.resetForm();
//   };
//   resetForm = () => {
//     this.setState({ name: "", number: "" });
//   };
//   render() {
//     const { name, number } = this.state;

//     return (
//       <form className={styles.form} onSubmit={this.handleSubmit}>
//         <label className={styles.label} htmlFor={this.nameInputId}>
//           Name
//           <input
//             className={styles.input}
//             id={this.nameInputId}
//             value={name}
//             onChange={this.handleChange}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           ></input>
//         </label>
//         <label className={styles.label} htmlFor={this.numberInputId}>
//           Number
//           <input
//             className={styles.input}
//             id={this.numberInputId}
//             value={number}
//             onChange={this.handleChange}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//           ></input>
//         </label>
//         <button className={styles.button} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
Forma.propTypes = {
  onSubmit: PropTypes.func,
};

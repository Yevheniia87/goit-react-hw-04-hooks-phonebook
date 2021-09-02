import React from "react";
import PropTypes from "prop-types";
import styles from "./contacts.module.css";

export default function ContactsList({ contacts, onDelete }) {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.li} key={id}>
          {name}: {number}
          <button className={styles.buttonDel} onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactsList.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  onDelete: PropTypes.func.isRequired,
};

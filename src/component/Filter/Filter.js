import React from "react";
import PropTypes from "prop-types";
import styles from "./filter.module.css";

export default function Filter({ value, onChange }) {
  return (
    <label className={styles.filter}>
      Find contacts by name
      <input
        className={styles.filterInput}
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
}
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

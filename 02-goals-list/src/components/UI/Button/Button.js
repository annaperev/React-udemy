import React from 'react';

// this import we use to import css modules
// css modules just change class names from css files to make them unique
// https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;

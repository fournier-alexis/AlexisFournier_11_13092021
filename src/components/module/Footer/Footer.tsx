import React from "react";
import styles from "./Footer.module.css";
import logo from "./../../../assets/logo.svg";

export class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.container}>
        <img src={logo} alt="Kasa logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
}

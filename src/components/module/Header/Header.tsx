import React from "react";
import styles from './Header.module.css';
import logo from './../../../assets/logo.svg';
import { Link } from "react-router-dom";
import { getSearchedId } from "../../../utils/getSearchedId";
import { withRouter } from "react-router";

type Props = {
  history: {
    location: {
      hash: string;
      key: string;
      pathname: string;
      search: string;
      state: any;
    };
  };
};
class Header extends React.Component<Props, {}> {
  render() {
    const active_path = getSearchedId(this.props.history.location.pathname);
    return (
      <header className={styles.container}>
        <img className={styles.logo} src={logo} alt="Kasa logo" />
        <nav className={styles.nav}>
          <Link
            className={`${styles.a} ${styles.accueil} ${
              active_path === "/" ? styles.active : ""
            }`}
            to="/"
          >
            Accueil
          </Link>
          <Link
            className={`${styles.a} ${
              active_path === "/about" ? styles.active : ""
            }`}
            to="/about"
          >
            A Propos
          </Link>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header as any);
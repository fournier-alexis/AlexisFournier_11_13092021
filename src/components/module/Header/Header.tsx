import React from "react";
import styles from './Header.module.css';
import logo from './../../../assets/logo.svg';
import { Link } from "react-router-dom";
import { getSearchedId } from "../../../utils/getSearchedId";


export class Header extends React.Component<{}, {}> {

    componentDidUpdate(){
        console.log(window.location.pathname);
    }

    render () {
        const active_path = getSearchedId(window.location.pathname);
        return (
            <header className={styles.container}>
                <img src={logo} alt="Kasa logo" />
                <nav className={styles.nav}>
                    <Link 
                    className={`${styles.a} ${styles.accueil} ${active_path === '/' ? styles.active : ''}`} 
                    to='/'>Accueil</Link>
                    <Link 
                    className={`${styles.a} ${active_path === '/about' ? styles.active : ''}`}
                    to='/about'>A Propos</Link>
                </nav>
            </header>
        )
    }
}
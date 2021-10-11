import React from 'react';
import styles from './Exception.module.css';

type Props = {
    code: number;
    error: string;
}

export class Exception extends React.Component<Props, {}> {
    render () {
        return (
            <div className={styles.container}>
                <h1 className={styles.code} data-testid="code">{this.props.code}</h1>
                <h2 className={styles.error} data-testid="error">{this.props.error}</h2>
                <a className={styles.link} href={'/'} data-testid="link">{"Retourner sur la page d'accueil"}</a>
            </div>
        )
    }
}
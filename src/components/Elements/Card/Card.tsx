import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

type Props = {
    id: string;
    image_path?: string;
    alt?: string;
    title: string;
}

export class Card extends React.Component<Props, {}> {

    goToDetails = (id: string): any => {
        window.location.href = "/location?id=" + id;
    };

    render () {
        return (
            <Link className={styles.card} to={`/location?id=${this.props.id}`}>
                {this.props.image_path ? (
                    <img className={styles.image} src={this.props.image_path} alt={this.props.alt} />
                ) : (
                    <div className={styles.container}/>
                )}
                <h1 className={styles.title}>{this.props.title}</h1>
            </Link>
        )
    }
}
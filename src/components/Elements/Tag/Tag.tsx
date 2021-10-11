import React from 'react';
import styles from './Tag.module.css';

type Props = {
    label: string;
}

export class Tag extends React.Component<Props, {}> {

    render () {
        return (
            <div className={styles.tag}>
                <p>{this.props.label}</p>
            </div>
        )
    }
}
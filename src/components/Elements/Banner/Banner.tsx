import React from 'react';
import styles from './Banner.module.css';

type Props = {
  image_path: string;
  alt: string;
  title?: string;
  brightness?: number;
};

export class Banner extends React.Component<Props, {}> {
  render() {
    return (
      <div className={styles.banner}>
        <img
          className={styles.image}
          src={this.props.image_path}
          alt={this.props.alt}
          style={{
            filter: `brightness(${
              this.props.brightness ? this.props.brightness : 1
            })`,
          }}
        />
        {this.props.title && (
          <h1 className={styles.title}>{this.props.title}</h1>
        )}
      </div>
    );
  }
}
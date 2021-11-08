import React from "react";
import { DaoLocation } from "../../../types/DaoLocation";
import styles from "./Carrousel.module.css";
import angleLeft from "./../../../assets/images/angle-left.svg";
import angleRight from "./../../../assets/images/angle-right.svg";

type Props = {
  location: DaoLocation;
};

type State = {
  image_position: number;
};

export class Carrousel extends React.Component<Props, State> {
  state: State = {
    image_position: 0,
  };

  constructor(props: Props) {
    super(props);
    this.swapToPreviousImage = this.swapToPreviousImage.bind(this);
    this.swapToNextImage = this.swapToNextImage.bind(this);
  }

  swapToPreviousImage(): void {
    this.setState((prevState) => {
      return { image_position: prevState.image_position - 1 };
    });
  }

  swapToNextImage(): void {
    this.setState((prevState) => {
      return { image_position: prevState.image_position + 1 };
    });
  }

  render() {
    return (
      <div className={styles.carrousel}>
        <div className={styles.banner}>
          <img
            className={styles.image}
            src={this.props.location.pictures[this.state.image_position]}
            alt={this.props.location.title}
          />
          <p className={styles.position}>{`${this.state.image_position + 1}/${
            this.props.location.pictures.length
          }`}</p>
        </div>
        {this.props.location.pictures[this.state.image_position - 1] && (
          <img
            className={`${styles.angle} ${styles.left}`}
            src={angleLeft}
            alt="Précédent"
            onClick={this.swapToPreviousImage}
          />
        )}
        {this.props.location.pictures[this.state.image_position + 1] && (
          <img
            className={`${styles.angle} ${styles.right}`}
            src={angleRight}
            alt="Suivant"
            onClick={this.swapToNextImage}
          />
        )}
      </div>
    );
  }
}

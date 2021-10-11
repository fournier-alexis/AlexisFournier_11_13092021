import React from "react";
import styles from "./Dropdown.module.css";
import angleDown from "./../../../assets/images/angle-down.svg";
import angleUp from "./../../../assets/images/angle-up.svg";

type Props = {
  label: string;
  content: string[];
  width: string;
  height: string;
};

type State = {
  isOpen: boolean;
};

export class Dropdown extends React.Component<Props, State> {
  state: State = {
    isOpen: false,
  };

  constructor(props: any) {
    super(props);
    this.swapDropdown = this.swapDropdown.bind(this);
  }

  swapDropdown(): void {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  }

  render() {
    return (
      <div className={styles.dropdown} style={{ width: this.props.width }}>
        <div className={styles.title} onClick={this.swapDropdown}>
          <h3>{this.props.label}</h3>
          <img
            className={styles.angle}
            src={this.state.isOpen ? angleUp : angleDown}
            alt="Ouvrir / Fermer le menu"
          />
        </div>
        <div
          className={styles.content}
          style={{
            height: this.state.isOpen ? this.props.height : "0px",
            padding: this.state.isOpen ? "40px 20px 0 20px" : "0 20px 0 20px",
          }}
        >
          {this.props.content.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
      </div>
    );
  }
}

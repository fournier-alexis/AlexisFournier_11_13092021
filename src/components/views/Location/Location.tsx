import React from "react";
import styles from "./Location.module.css";
import { getSearchedId } from "../../../utils/getSearchedId";
import { DaoLocation } from "../../../types/DaoLocation";
import star from "./../../../assets/images/star.svg";
import { Tag } from "../../Elements/Tag/Tag";
import { Dropdown } from "../../Elements/Dropdown/Dropdown";
import { Carrousel } from "../../Elements/Carrousel/Carrousel";
import { Redirect } from "react-router";

type Props = {
  locations: DaoLocation[];
};

type State = {
  screenWidth: number;
};

export class Location extends React.Component<Props, State> {
  state: State = {
    screenWidth: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  handleResize() {
    if (Math.abs(this.state.screenWidth - window.innerWidth) > 50) {
      this.setState({
        screenWidth: window.innerWidth,
      });
    }
  }

  render() {
    const id = getSearchedId(window.location.search);
    const [location] = this.props.locations.filter(
      (location) => location.id === id
    );

    if (!location) {
      return <Redirect to="/not-found" />;
    }

    const fullname = location.host.name.split(" ");
    const nom: string = fullname && fullname[0];
    const prenom: string = fullname && fullname[1];
    const rating = new Array(5)
      .fill(0)
      .fill(1, 0, parseInt(location.rating, 10));
    const dropdownWidth = this.state.screenWidth >= 650 ? "582px" : "100%";
    const dropdownHeight = this.state.screenWidth >= 650 ? 249 : 143;

    return (
      <main className={styles.main}>
        <Carrousel location={location}></Carrousel>
        <div className={styles.details}>
          <div className={styles.row_1}>
            <div>
              <h1 className={styles.title}>{location.title}</h1>
              <h2 className={styles.location}>{location.location}</h2>
            </div>
            <div className={styles.tags}>
              {location.tags.map((tag, index) => (
                <Tag key={index} label={tag} />
              ))}
            </div>
          </div>
          <div className={styles.row_2}>
            <div className={styles.host}>
              <div className={styles.identity}>
                <p>{nom}</p>
                <p>{prenom}</p>
              </div>
              <img
                src={location.host.picture}
                alt={`Portrait de ${location.host.name}`}
              />
            </div>
            <div className={styles.rate}>
              {rating.map((isActived, index) => (
                <img
                  key={index}
                  className={`${isActived ? styles.active : styles.inactive}`}
                  src={star}
                  alt={"Etoile d'??valuation"}
                ></img>
              ))}
            </div>
          </div>
        </div>
        <section className={styles.informations}>
          <Dropdown
            label={"Description"}
            content={[location.description]}
            width={`${dropdownWidth}`}
            height={`${dropdownHeight}px`}
          ></Dropdown>
          <Dropdown
            label={"Equipement"}
            content={location.equipments}
            width={`${dropdownWidth}`}
            height={`${dropdownHeight}px`}
          ></Dropdown>
        </section>
      </main>
    );
  }
}

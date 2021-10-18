import React from "react";
import { Banner } from "../../Elements/Banner/Banner";
import styles from "./Home.module.css";
import banner from "./../../../assets/images/sea-side.png";
import { Card } from "../../Elements/Card/Card";
import { DaoLocation } from "../../../types/DaoLocation";

type Props = {
  locations: DaoLocation[];
};

export class Home extends React.Component<Props, {}> {
  goToDetails = (id: string): any => {
    window.location.href = "/location?id=" + id;
  };

  render() {
    const bannerHeight = window.screen.width >= 650 ? 223 : 111;
    return (
      <main className={styles.main}>
        <Banner
          image_path={banner}
          alt="Bord de mer"
          height={bannerHeight}
          title="Chez vous, et partout ailleurs"
          brightness={0.7}
        />
        <section className={styles.locations}>
          {this.props.locations.map((location) => (
            <Card
              key={location.id}
              id={location.id}
              image_path={location.cover}
              alt={location.description}
              title={location.title}
            />
          ))}
          <Card id={"null"} title={"Titre de la location"} />
        </section>
      </main>
    );
  }
}

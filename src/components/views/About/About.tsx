import React from 'react';
import { Banner } from '../../Elements/Banner/Banner';
import styles from './About.module.css';
import banner from './../../../assets/images/mountain.png';
import { Dropdown } from '../../Elements/Dropdown/Dropdown';

type State = {
  screenWidth: number;
};
export class About extends React.Component<{}, State> {
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
    const dropdownWidth = this.state.screenWidth >= 1050 ? 1023 : 335;
    const fiabilite: string =
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
    const respect: string =
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const service: string =
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const securite: string =
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

    return (
      <main className={styles.main}>
        <Banner
          image_path={banner}
          alt="Vision d'une montagne"
          brightness={0.7}
        />
        <section className={styles.informations}>
          <Dropdown
            label="Fiabilité"
            content={[fiabilite]}
            width={`${dropdownWidth}px`}
            height="146px"
          />
          <Dropdown
            label="Respect"
            content={[respect]}
            width={`${dropdownWidth}px`}
            height="146px"
          />
          <Dropdown
            label="Service"
            content={[service]}
            width={`${dropdownWidth}px`}
            height="117px"
          />
          <Dropdown
            label="Sécurité"
            content={[securite]}
            width={`${dropdownWidth}px`}
            height="223px"
          />
        </section>
      </main>
    );
  }
}
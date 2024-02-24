import "../about/about.scss";
import  kaien from "../../assets/kaien.png";
import Banner from "../../components/banner/Banner";
import Collapse from "../../components/collapse/Collapse";


const About = () => {

    return (
        <div className="wrapperAbout">
            <Banner img={kaien} alt="kaien"/>
        <div className="containerDiv">
            <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
            <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Collapse title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaques logements correspond aux critères de sécurités établie par nos services En laissant une note aussi bien à l'hôte qu'aux locataires, cela permet à nos équipes de vérifier que les standards sont bien respetés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </div>
        </div>
    );
};

export default About;
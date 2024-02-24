import "../about/about.scss";
import { useState } from "react";
import  kaien from "../../assets/kaien.png";
import Arrow from "../../assets/arrow.svg";
import Banner from "../../components/banner/Banner";


const About = () => {

    // Déclaration de l'état initial contenant les états des différentes sections
    const[sectionStates, setSectionState] = useState({
        fiabilite: false,
        respect: false,
        service: false,
        securite: false
    });

    //fonction, pour basculer l'état de la section spécifiée
    const toggleText = (section) => {
        //MAJ de l'état en copiant l'état actuel et en inversant la valeur de la section spécifiée
        setSectionState({
            //copie de l'état actuel
            ...sectionStates,

            //inversion de la valeur de la section spécifiée
            [section] : !sectionStates[section] 
        })
    }

    return (
        <div className="wrapperAbout">
            <Banner img={kaien} alt="kaien"/>
        <div className="containerDiv">

                <div className="aboutDiv" onClick={() => toggleText('fiabilite')}>
                    <h3 className="titleAbout" >Fiabilité<img className={`aboutArrow ${sectionStates.fiabilite ? 'down' : ''}`} src={Arrow}/></h3>
                    {sectionStates.fiabilite &&<p className="pAbout">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>}  
                </div>    

                <div className="aboutDiv" onClick={() => toggleText('respect')}>
                    <h3 className="titleAbout" >Respect<img className={`aboutArrow ${sectionStates.respect ? 'down' : ''}`} src={Arrow}/></h3>
                    {sectionStates.respect &&<p className="pAbout">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
                </div>   

                <div className="aboutDiv" onClick={() => toggleText('service')}>
                    <h3 className="titleAbout" >Service<img className={`aboutArrow ${sectionStates.service ? 'down' : ''}`} src={Arrow}/></h3>
                    {sectionStates.service &&<p className="pAbout">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
                </div>    

                <div className="aboutDiv" onClick={() => toggleText('securite')}>
                    <h3 className="titleAbout" >Sécurité<img className={`aboutArrow ${sectionStates.securite ? 'down' : ''}`} src={Arrow}/></h3>
                    {sectionStates.securite&&<p className="pAbout">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaques logements correspond aux critères de sécurités établie par nos services En laissant une note aussi bien à l'hôte qu'aux locataires, cela permet à nos équipes de vérifier que les standards sont bien respetés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
                </div>

        </div>
        </div>
    );
};

export default About;
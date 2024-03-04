import "../collapse/collapse.scss";
import { useState } from 'react';
import Arrow from "../../assets/arrow.svg";

//défini le composant collapse pour indiquer si collapse est ouvert ou fermer
const Collapse = ({ title, content }) => {
  //créer un état local isOpen avec la fonction setIsOpen pour gérer l'ouverture ou la fermeture de collapse
  const [isOpen, setIsOpen] = useState(false);

  //fonction handleToggle pour basculer l'etat isOpen entre vrai est faux à chaque click
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapseDiv">
      <h3 className="titleCollapse" onClick={handleToggle}>{title} <img className={`aboutArrow ${isOpen ? 'rotate' : ''}`} src={Arrow} alt="arrow"/></h3>
      
      {/*affiche le contenu qi isOpen est vrai*/}
      {isOpen && <ul className="contentText">{content}</ul>}
    </div>
  );
};

export default Collapse;
import { useParams } from 'react-router-dom';
import { useState } from "react";
import Carousel from '../../components/carrousel/Carousel.jsx';
import '../productPage/productPage.scss';
import Star from "../../assets/star.svg";
import StarGray from "../../assets/starGray.svg";
import Arrow from "../../assets/arrow.svg";
import Error from "../error/Error.jsx";



function ProductPage({data}) {
// Extrait la valeur de l'ID de l'URL actuelle en utilisant useParams
const { id } = useParams();

// Recherche un élément dans un tableau 'data' dont la propriété 'id' est égale à la valeur de 'id' extrait de l'URL
const product = data.find(prod => prod.id === id);

// Vérifie si le produit a été trouvé ou non, affiche une page d'erreur si le produit n'est pas trouvé
if (!product) {
    return <Error/>
}



    const renderRatingStars = () => {
        const rating = parseInt(product.rating);
        const stars = [];
    
        // Créer les étoiles en ajoutant uniquement la classe "star"
        for (let i = 0; i < 5; i++) {
                if(i < rating){
                    stars.push(<img src={Star} className="star" key={i} />);
                }
                else{
                    stars.push(<img src={StarGray} className="starGray" key={i} />);
                }
            }
    
            
        return stars;
    };

        // Déclaration de l'état initial contenant les états des différentes sections
        const[sectionStates, setSectionState] = useState({
            description: false,
            equipement: false,
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
        <div className="wrapperProductPage">
            <Carousel/>
            <div className="host">
                <div className="hostInfo">
                <p className="titleProduct">{product.title}</p>
                <p className="locationProduct">{product.location}</p>
                </div>
                <div className="hostProfil">
                <p className="hostName">{product.host.name}</p>
                <img className="hostPicture" src={product.host.picture} alt="host picture"/>
                </div>
            </div>
            <div className="tagsStarContainer">
                <div className="tagsContainer">
                {product.tags.map((tag, index) => (
                    <p className="tagsProduct" key={index}>{tag}</p>
                ))}
                </div>
                <div className="contentVersionMobile">
                <div className="starsContainer">
                {renderRatingStars()}
                </div>
                <div className="hostProfilMobile">
                <p className="hostNameMobile">{product.host.name}</p>
                <img className="hostPictureMobile" src={product.host.picture} alt="host picture"/>
                </div>
                </div>
            </div>
            <div className="descripEquipeContainer">
                <div className="description" onClick={() => toggleText('description')}>
                    <h3 className="descripTitle">Description <img className={`aboutArrow ${sectionStates.description ? 'down' : ''}`}  src={Arrow}/></h3>
                    {sectionStates.description &&<p className="descripProduct">{product.description}</p>}
                </div>
                <div className="equipement" onClick={() => toggleText('equipement')}>
                    <h3 className="equipeTitle">Équipement <img className={`aboutArrow ${sectionStates.equipement ? 'down' : ''}`} src={Arrow}/></h3>
                    {product.equipments.map((tag, index) => (
                    sectionStates.equipement && <p className="equipeProduct" key={index}>{tag}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;

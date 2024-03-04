import { useState } from "react";
import { useParams } from "react-router-dom";
import "../../components/carrousel/carrousel.scss";
import arrowLeft from "../../assets/arrowleft.png";
import arrowRight from "../../assets/arrowright.png";

function Carousel(props) {
    //récupère l'ID depuis le paramètres de l'URL
    const { id } = useParams();
    //recherche du produit correspondant ) l'ID dans le tableau "data"
    const product = props.data.find(prod => prod.id === id);

    const totalImages = product.pictures.length;

    //initialisation de l'indice de l'image actuelle à afficher et de sa fonction de mise à jour
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    //passer à l'image precèdente
    const goToPreviousSlide = () => {
        setCurrentImageIndex(prevIndex => (prevIndex - 1 + totalImages) % totalImages);
    };
    
    //passer à l'image suivante
    const goToNextSlide = () => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % totalImages);
    };

    return (
        <div className="carouselWrapper">
            <div className="imageContainer">
                {/*vérifie si le nombre total d'image est supérieur à 1*/}
                {totalImages > 1 &&(
                    <>
                <img className="arrow left" src={arrowLeft} alt="Previous" onClick={goToPreviousSlide} />
                <img className="imgCarousel" src={product.pictures[currentImageIndex]} alt={product.title} />
                <img className="arrow right" src={arrowRight} alt="Next" onClick={goToNextSlide} />
                <span className="numberImg">{currentImageIndex +1} / {totalImages}</span>
                </>
            )}
                            {/*vérifie si le nombre total d'image est égal à 1*/}
            {totalImages === 1 && (<img className="imgCarousel" src={product.pictures[currentImageIndex]} alt={product.title} />)}
                </div>
        </div>
    );
}

export default Carousel;

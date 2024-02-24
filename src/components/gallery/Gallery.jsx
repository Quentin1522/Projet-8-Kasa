import "../gallery/gallery.scss";
import {Link} from "react-router-dom";


function Gallery({data}) {
    // rendu du composant
    return (
        <div className="cardContainer">
            {data.map((details, galleryIndex) => (
                    // Utilisation de Link pour envelopper chaque carte
                    <Link to={`/product/${details.id}`} key={`gallery-${galleryIndex}`} style={{ textDecoration: 'none' }}>
                        <div className="card">
                            <p className="pGallery">{details.title}</p>
                                    {/* affiche le titre de chaque card */}
                            <img className="imgGallery" src={details.cover} alt={details.title}/>
                               {/* affiche l'image de chaque card */}
                        </div>
                    </Link>
            ))}
        </div>
    );    
}

export default Gallery;
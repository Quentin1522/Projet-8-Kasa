import "../error/error.scss";
import {Link  } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <div className="wrapperError">
            <h1 className="titleError">404</h1>
            <p className="pError">Oups! La page que vous demandez n'existe pas.</p>
            <p className="linkHome"><Link to="/">Retourner sur la page d’accueil</Link></p>
            </div>
        </div>
    );
};

export default Error;
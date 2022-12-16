import AlimentContainer from "../../module/alimentcontainer";
import NavBar from "../../module/navbar";
import AjouterAlimentFormulaire from "../../module/formulaire/ajouteraliment";
import style from "./style.module.css";
import { useUser } from "../../utils/hooks/custom";


const AjouterAlimentPage = () => {
    return (
        <>
            <NavBar />
            {useUser() &&
                <div className={style.ajouterPage}>
                    <div className={style.ajouterHeader}>
                        <h2>Ajouter des aliments à votre base de donnée</h2>
                    </div>
                    <AjouterAlimentFormulaire />
                    <AlimentContainer />
                </div>
            }
        </>
    );
};

export default AjouterAlimentPage;

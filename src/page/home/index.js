import { NavLink } from "react-router-dom";
import NavBar from "../../module/navbar";
import { useUser } from "../../utils/hooks/custom";
import style from "./style.module.css";

const Home = () => {
    const user = useUser();
    return (
        <>
            <NavBar />
            {useUser() &&
                <div className={style.home}>
                    <div className={style.homeHeader}>
                        <p>Welcome to</p>
                        <h1>Glycemic</h1>
                    </div>
                    <p className={style.youAreConected}>Vous êtes Connecter</p>
                    <p className={style.user}>{user.displayName}</p>
                    <ul className={style.choix}>
                        <NavLink to="/ajouter">
                            <li><strong>Ajoute des aliments a la base de donnée</strong></li>
                        </NavLink>
                        <br />
                        <p>Puis</p>

                        <br />
                        <NavLink to="/repas">
                            <li><strong>Crée des repas pour voir le total de macro</strong></li>
                        </NavLink>
                    </ul>
                </div>
            }
        </>
    );
};

export default Home;

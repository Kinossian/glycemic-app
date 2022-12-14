import React, { useCallback, useState } from 'react';
import style from "./style.module.css";

const AlimentsCards = ({ aliment }) => {
    const [alimentIsOpen, setAlimentIsOpen] = useState(false);

    const handleOnClick = useCallback(() => {
        setAlimentIsOpen(!alimentIsOpen);
    }, [alimentIsOpen]);

    return (
        <div
            onClick={handleOnClick}
            className={`${style.cardAliment} ${alimentIsOpen ? style.linkActive : ''}`}>
            <div className={style.nameAliment}>
                <h3>{aliment.name}</h3>
                <span>/100gr</span>
            </div>
            <div className={style.macroContainerAll}>
                <div className={style.macroContainer}>
                    <h4>Kcal</h4>
                    <p>{aliment.kcal}</p>
                </div>
                <div className={style.macroContainer}>
                    <h4>Glucide</h4>
                    <p>{aliment.glucide}</p>
                </div>
                <div className={style.macroContainer}>
                    <h4>Lipide</h4>
                    <p>{aliment.lipide}</p>
                </div>
                <div className={style.macroContainer}>
                    <h4>Proteine</h4>
                    <p>{aliment.proteine}</p>
                </div>
            </div>
        </div >
    );
};

export default AlimentsCards;
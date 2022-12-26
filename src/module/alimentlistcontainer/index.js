import React, { useCallback, useMemo } from 'react';
import { useAliments } from '../../utils/hooks/custom';
import style from "./style.module.css";
import { doAddDocRepa } from '../../utils/firebase/methode';

const AlimentListContainer = ({ target }) => {
    const alimentsArray = useAliments();

    const viandeArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "viande";
        });
    }, [alimentsArray]);
    const féculantArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "féculant";
        });
    }, [alimentsArray]);
    const légumeArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "légume";
        });
    }, [alimentsArray]);
    const biscuitArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "biscuit";
        });
    }, [alimentsArray]);
    const dessertArray = useMemo(() => {
        return alimentsArray.filter((aliment) => {
            return aliment.category === "dessert";
        });
    }, [alimentsArray]);

    const handleAdd = useCallback((e) => {
        let grammeRepa = prompt("Combien de gramme voulez vous ajouter ?");
        if (grammeRepa <= 0) {
            return;
        }
        const alimentChoised = alimentsArray.filter((aliment) => aliment.name === e.target.innerText);
        const dataInit = {
            quelRepas: target,
            grammeRepa: Number(grammeRepa),
            date: Date.now()
        };
        const data = { ...dataInit, ...alimentChoised[0] };
        doAddDocRepa(data);

    }, [alimentsArray, target]);


    return (
        <>
            <li className={style.alimentListContainer}>
                <h2>VIANDE</h2>
                {
                    viandeArray && viandeArray.map((aliment) => (
                        <div
                            onClick={handleAdd}
                            key={aliment.id}
                            className={style.alimentChoix}>
                            {aliment.name}
                        </div>
                    ))
                }
            </li>

            <li className={style.alimentListContainer}>
                <h2>FECULANT</h2>
                {
                    féculantArray && féculantArray.map((aliment) => (
                        <li
                            onClick={handleAdd}
                            key={aliment.id}
                            className={style.alimentChoix}>
                            {aliment.name}
                        </li>
                    ))
                }
            </li>

            <li className={style.alimentListContainer}>
                <h2>LEGUME</h2>
                {
                    légumeArray && légumeArray.map((aliment) => (
                        <li
                            onClick={handleAdd}
                            key={aliment.id}
                            className={style.alimentChoix}>
                            {aliment.name}
                        </li>
                    ))
                }
            </li>

            <li className={style.alimentListContainer}>
                <h2>DESSERT</h2>
                {
                    dessertArray && dessertArray.map((aliment) => (
                        <li
                            onClick={handleAdd}
                            key={aliment.id}
                            className={style.alimentChoix}>
                            {aliment.name}
                        </li>
                    ))
                }
            </li>

            <li className={style.alimentListContainer}>
                <h2>BISCUIT</h2>
                {
                    biscuitArray && biscuitArray.map((aliment) => (
                        <li
                            onClick={handleAdd}
                            key={aliment.id}
                            className={style.alimentChoix}>
                            {aliment.name}
                        </li>
                    ))
                }
            </li>
        </>
    );
};

export default AlimentListContainer;
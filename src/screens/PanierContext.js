import React, { createContext, useContext, useState } from 'react';

const PanierContext = createContext();

export const usePanier = () => {
    return useContext(PanierContext);
};

export const PanierProvider = ({ children }) => {
    const [contenuPanier, setContenuPanier] = useState([]);

    const ajouterAuPanier = (element) => {
        setContenuPanier([...contenuPanier, element]);
    };

    const supprimerDuPanier = (index) => {
        const nouveauContenuPanier = [...contenuPanier];
        nouveauContenuPanier.splice(index, 1);
        setContenuPanier(nouveauContenuPanier);
    };


    const nombreDeMenusDansPanier = contenuPanier.length;

    return (
        <PanierContext.Provider value={{ contenuPanier, ajouterAuPanier, nombreDeMenusDansPanier, supprimerDuPanier }}>
            {children}
        </PanierContext.Provider>
    );
};

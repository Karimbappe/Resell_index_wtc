import React, { useState } from 'react';
import { drops_data } from '../data/data';
import './Drops.css';


const Drops = () => {
// State pour stocker l'indice de resell sélectionné
const [resellIndex, setResellIndex] = useState(0);

// Tableau des options de filtre
const filterOptions = [
    { label: 'Tous les resell', value: 0 },
    { label: 'Excellent resell', value: 1 },
    { label: 'Bon resell', value: 2 },
    { label: 'Moyen resell', value: 3 },
    { label: 'Mauvais resell', value: 4 },
];

// Fonction pour afficher les options de filtre
const renderFilterOptions = () => {
    return filterOptions.map((option) => (
        <option  key={option.value} value={option.value}>
            {option.label}
        </option>
    ));
};

// Fonction pour filtrer les drops en fonction de l'indice de resell
const filterDrops = (drops, resellIndex) => {
    if (resellIndex === 0) {
// Si aucun filtre n'est appliqué, retourner la liste de drops complète
    return drops;
    }

// Sinon, filtrer les drops en fonction de l'indice de resell
    return drops.filter((drop) => {
    if (resellIndex === 1) {
        return drop.resellIndex === 'EXCELLENT';
    } else if (resellIndex === 2) {
        return drop.resellIndex === 'BON';
    } else if (resellIndex === 3) {
        return drop.resellIndex === 'MOYEN';
    } else if (resellIndex === 4) {
        return drop.resellIndex === 'MAUVAIS';
    }
    return false;
    });
};

// Récupérer la liste de drops filtrée
const filteredDrops = filterDrops(drops_data, resellIndex);

// Afficher la liste de drops filtrée
const renderDrops = () => {
    return filteredDrops.map((drop) => (
        <div className='card' key={drop.id}>
            <div className='image__container'>
                <img className='card__image' src={drop.imagePath} alt={drop.modelName} />
            </div>
            <div className='text__container'>
                <p style={{ color: drop.colorName }} className='card__name'>{drop.modelName}</p>
                <p className='card__brand'>{drop.brandName}</p>
                <div className='resellIndex__container'>
                    <div style={{backgroundColor: drop.resellColor}} className='card__colored-dot'></div>
                    <p className='card__resellIndex'>{drop.resellIndex} RESELL</p>
                </div>
            </div>
        </div>
    ));
};

return (
    <div>
        <div className='app__drop'>
            <p className='app__drops-title'>Drops</p>
            <select className='app__drop-menu' value={resellIndex} onChange={(e) => setResellIndex(parseInt(e.target.value))}>
            {renderFilterOptions()}
            </select>
        </div>
        <div className='app__drop-card'>
            {renderDrops()}
        </div>  
    </div>
    );
};

export default Drops;


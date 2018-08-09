import React from 'react';

const NoRecipes = props => (
    <li className='no-recipes'>
        <i className="material-icons icon-recipe">sentiment_very_dissatisfied</i>
        <h3>Sorry, no recipes match your search.</h3>
    </li>
);

export default NoRecipes;

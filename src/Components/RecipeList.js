import React from 'react';
import Recipe from './Recipe';
import NoRecipes from './NoRecipes';

const RecipeList = props => {

    const results = props.data;
    let recipes;
    if (results.length > 0) {
        recipes = results.map(recipe => <Recipe
          title={recipe.title}
          href={recipe.href}
          thumbnail={recipe.thumbnail}
          ingredients={recipe.ingredients}
          key={recipe.href}
          />);
    } else {
        recipes = <NoRecipes />
    }

    return(
        <ul className="recipe-list">
          {recipes}
        </ul>
    );
}

export default RecipeList;

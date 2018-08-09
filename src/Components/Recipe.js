import React from 'react';

const Recipe = props => (
    <li className="recipe-wrap">
      <a href={props.href}>{props.title}</a>
      <ul><img src={props.thumbnail} alt=""/></ul>
      <ul><i> {props.ingredients} </i></ul>
    </li>
);

export default Recipe;

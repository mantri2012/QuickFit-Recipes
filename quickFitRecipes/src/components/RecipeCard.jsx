import React from 'react';
import './RecipeCard.css';

function RecipeCard({ title, ingredients, prepTime, onDelete }) {
  return (
    <div className="recipe-card">
      <h3>{title}</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Prep Time: {prepTime}</p>
      {onDelete && (
        <button onClick={onDelete} className="btn btn-danger">Delete</button>
      )}
    </div>
  );
}

export default RecipeCard;
import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../mockData';

function Recipes() {
  const [searchTerm, setSearchTerm] = useState('');

  // To filter recipes based on prep time input
  const filteredRecipes = recipes.filter(recipe =>
    recipe.prepTime.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>All Recipes</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by prep time (e.g. 2 mins)"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{
          padding: '8px',
          fontSize: '16px',
          marginBottom: '1rem',
          width: '250px',
        }}
      />
    <button type="button" className="btn btn-primary">ADD</button>
      {/* Filtered recipes */}
      {filteredRecipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          title={recipe.title}
          ingredients={recipe.ingredients}
          prepTime={recipe.prepTime}
        />
      ))}
    </div>
  );
}

export default Recipes;

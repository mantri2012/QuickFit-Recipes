import React, { useState } from 'react';

function RecipeForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [prepTime, setPrepTime] = useState('');

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (!title || !ingredients || !prepTime) return;
    onAdd({
      title,
      ingredients: ingredients.split(',').map(i => i.trim()),
      prepTime,
    });
    setTitle('');
    setIngredients('');
    setPrepTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input type="text" placeholder="Ingredients (comma separated)" value={ingredients} onChange={e => setIngredients(e.target.value)} required />
      <input type="text" placeholder="Prep Time (e.g. 10 mins)" value={prepTime} onChange={e => setPrepTime(e.target.value)} required />
      <button type="submit">Save</button>
    </form>
  );
}

export default RecipeForm;

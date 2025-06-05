import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { recipes as initialRecipes } from '../mockData';

function Recipes() {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  // Favorites state
  const [favorites, setFavorites] = useState([]);

  // TO show form for adding to favorites
  const [showFavForm, setShowFavForm] = useState(false);
  const [favTitle, setFavTitle] = useState('');
  const [favIngredients, setFavIngredients] = useState('');
  const [favPrepTime, setFavPrepTime] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.prepTime.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // handling Add to Favorites button click: open form
  const handleAddFavoriteClick = (index) => {
    const recipe = recipes[index];
    setFavTitle(recipe.title);
    setFavIngredients(recipe.ingredients.join(', '));
    setFavPrepTime(recipe.prepTime);
    setShowFavForm(true);
  };

  // Submit favorite form
  const handleFavFormSubmit = (e) => {
    e.preventDefault();

    if (!favTitle.trim() || !favIngredients.trim() || !favPrepTime.trim()) {
      alert('Please fill all fields for favorite');
      return;
    }

    const newFav = {
      title: favTitle.trim(),
      ingredients: favIngredients.split(',').map(i => i.trim()),
      prepTime: favPrepTime.trim(),
    };

    // Avoid duplicates by title
    if (!favorites.some(fav => fav.title === newFav.title)) {
      setFavorites(prev => [...prev, newFav]);
    } else {
      alert('This recipe is already in favorites!');
    }

    // Close favorite form and reset fields
    setShowFavForm(false);
    setFavTitle('');
    setFavIngredients('');
    setFavPrepTime('');
  };

  // Remove from favorites
  const handleRemoveFavorite = (index) => {
    setFavorites(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>All Recipes</h2>

      {/* Search + Add button */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search by prep time (e.g. 2 mins)"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ padding: '8px', fontSize: '16px', width: '250px' }}
        />
        <button className="btn btn-primary" onClick={() => {
          setShowForm(true);
          setEditIndex(-1);
          setTitle('');
          setIngredients('');
          setPrepTime('');
        }}>
          Add
        </button>
      </div>

      {/* Add/Edit Recipe Form */}
      {showForm && (
        <form onSubmit={(e) => {
          e.preventDefault();
          
          if (!title.trim() || !ingredients.trim() || !prepTime.trim()) {
            alert('Please fill all fields');
            return;
          }
          const newRecipe = {
            title: title.trim(),
            ingredients: ingredients.split(',').map(i => i.trim()),
            prepTime: prepTime.trim(),
          };

          if (editIndex === -1) {
            setRecipes(prev => [...prev, newRecipe]);
          } else {
            setRecipes(prev => prev.map((r, i) => (i === editIndex ? newRecipe : r)));
          }
          setShowForm(false);
          setEditIndex(-1);
          setTitle('');
          setIngredients('');
          setPrepTime('');
        }} style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <label>
              Title:{' '}
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                style={{ padding: '6px', width: '300px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <label>
              Ingredients (comma separated):{' '}
              <input
                type="text"
                value={ingredients}
                onChange={e => setIngredients(e.target.value)}
                style={{ padding: '6px', width: '300px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <label>
              Prep Time:{' '}
              <input
                type="text"
                value={prepTime}
                onChange={e => setPrepTime(e.target.value)}
                style={{ padding: '6px', width: '150px' }}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-success">
            {editIndex === -1 ? 'Save Recipe' : 'Update Recipe'}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ marginLeft: '1rem' }}
            onClick={() => {
              setShowForm(false);
              setEditIndex(-1);
            }}
          >
            Cancel
          </button>
        </form>
      )}

      {/* Favorite Form */}
      {showFavForm && (
        <form onSubmit={handleFavFormSubmit} style={{ marginBottom: '2rem', textAlign: 'center', border: '1px solid #ccc', padding: '1rem', width: '350px', margin: 'auto' }}>
          <h3>Add to Favorites</h3>
          <div style={{ marginBottom: '0.5rem' }}>
            <label>
              Title:{' '}
              <input
                type="text"
                value={favTitle}
                onChange={e => setFavTitle(e.target.value)}
                style={{ padding: '6px', width: '300px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <label>
              Ingredients (comma separated):{' '}
              <input
                type="text"
                value={favIngredients}
                onChange={e => setFavIngredients(e.target.value)}
                style={{ padding: '6px', width: '300px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <label>
              Prep Time:{' '}
              <input
                type="text"
                value={favPrepTime}
                onChange={e => setFavPrepTime(e.target.value)}
                style={{ padding: '6px', width: '150px' }}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-success">Add to Favorites</button>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ marginLeft: '1rem' }}
            onClick={() => setShowFavForm(false)}
          >
            Cancel
          </button>
        </form>
      )}

      {/* Recipe List */}
      {filteredRecipes.map((recipe, index) => (
        <div key={index} style={{ position: 'relative', marginBottom: '1rem' }}>
          <RecipeCard
            title={recipe.title}
            ingredients={recipe.ingredients}
            prepTime={recipe.prepTime}
          />
          <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
            <button
              className="btn btn-warning"
              onClick={() => {
                setShowForm(true);
                setEditIndex(index);
                setTitle(recipe.title);
                setIngredients(recipe.ingredients.join(', '));
                setPrepTime(recipe.prepTime);
              }}
              style={{ marginRight: '0.5rem' }}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                if (window.confirm('Are you sure you want to delete this recipe?')) {
                  setRecipes(prev => prev.filter((_, i) => i !== index));
                  if (editIndex === index) {
                    setShowForm(false);
                    setEditIndex(-1);
                  }
                }
              }}
              style={{ marginRight: '0.5rem' }}
            >
              Delete
            </button>
            <button
              className="btn btn-info"
              onClick={() => handleAddFavoriteClick(index)}
            >
              Add to Favorites
            </button>
          </div>
        </div>
      ))}

      {/* Favorites Section */}
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No favorites added yet.</p>
      ) : (
        favorites.map((fav, index) => (
          <div key={index} style={{ marginBottom: '1rem', textAlign: 'center' }}>
            <RecipeCard
              title={fav.title}
              ingredients={fav.ingredients}
              prepTime={fav.prepTime}
            />
            <button
              className="btn btn-danger"
              onClick={() => handleRemoveFavorite(index)}
              style={{ marginTop: '0.5rem' }}
            >
              Remove from Favorites
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Recipes;







function RecipeCard({ title, ingredients, prepTime }) {
  return (
    <article className="recipe-card">
      <h3>{title}</h3>
      <p>Ingredients: {ingredients.join(', ')} </p>
      <p>Prep Time: {prepTime}</p> 
      <button type="button" className="btn btn-danger">Delete</button> 
    </article>
  );
}

export default RecipeCard;
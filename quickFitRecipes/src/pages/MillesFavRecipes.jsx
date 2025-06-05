import RecipeCard from '../components/RecipeCard';
import { favourites } from '../millesFavRecipeData';

function MillesFavRecipes() {
  return (
    <section style={{ padding: '1rem' }}>
      <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Mille's Favorite Recipes</h2>

      {favourites.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
          }}
        >
          {favourites.map((favourite, index) => (
            <RecipeCard
              key={index}
              title={favourite.title}
              ingredients={favourite.ingredients}
              prepTime={favourite.prepTime}
            />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center' }}>No favorite recipes found.</p>
      )}
    </section>
  );
}

export default MillesFavRecipes;

import RecipeCard from '../components/RecipeCard';
import { favourites } from '../millesFavRecipeData';

function MillesFavRecipes() {
  return (
    <div>
      <h2>I love..</h2>
      {favourites.map((favourite, index) => (
        <RecipeCard
          key={index}
          title={favourite.title}
          ingredients={favourite.ingredients}
          prepTime={favourite.prepTime}
        />
      ))}
    </div>
  );
}

export default MillesFavRecipes;


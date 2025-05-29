import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <nav className='navigation-row'>
      <div className='link-size'><Link to="/">Home</Link></div>
      <div className='link-size'><Link to="/recipes">Recipes</Link></div> 
      <div className='link-size'><Link to="/favourites">My Fav Recipes</Link></div>
    </nav>
    
  );
}

export default Navbar;
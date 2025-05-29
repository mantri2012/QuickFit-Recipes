import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Link';
import Home from './pages/Homepage';
import Recipes from './pages/Recipes';
import MillesFavRecipes from './pages/MillesFavRecipes';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const Header = () => (
    <header className='recipe-header'>
      <h2 className='header-size'>Welcome to Mille's QuickFit Recipes! 😊 </h2>
    </header>
  );
  const Footer = () => (
    <footer>
      <p>&copy; 2025 Quickfit Recipes. All rights reserved.</p>
    </footer>
  );
  return (
  <div className="app-wrapper">
      <Header />
      <Navbar />
    <main>
      <div className="container">
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/favourites" element={<MillesFavRecipes/>} />
        </Routes>
      </div>
    </main>
    <Footer />
  </div>
 );
}

export default App; 

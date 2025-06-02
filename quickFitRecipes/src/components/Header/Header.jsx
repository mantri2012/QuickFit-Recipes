import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header-container">
      <div className = "header-2">
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/reachus">Reach Us</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
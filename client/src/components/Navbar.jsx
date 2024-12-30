import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        Secure Snipe
      </Link>
      <div className="nav-links">
        <Link to="/project-detector">Détecteur</Link>
        <Link to="/visualization">Visualisation</Link>
        <Link to="/wallet-tracking">Wallet</Link>
        <Link to="/project-alerts">Alertes</Link>
      </div>
    </nav>
  );
};

export default Navbar;
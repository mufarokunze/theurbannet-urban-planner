import { Link } from "react-router-dom";
import logo from "../assets/urbannet-logo.png";

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo-link">
        <img src={logo} alt="The Urbannet Logo" className="logo-image" />
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/login" className="nav-button">
          Log In/ Sign Up
        </Link>
      </nav>
    </header>
  );
}

export default Header;
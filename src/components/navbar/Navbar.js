import { NavLink, Link } from "react-router-dom";
import '../../App.css';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <div className="container">
        <Link to="/" className="fs-3 ubuntu navbar-brand">
          Rick & Morty <span className="text-primary">WiKi</span>
        </Link>
        <style jsx="true">{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button 
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        

          <i class="fas fa-bars open fw-bold text-dark"></i>
          <i class="fas fa-times close fw-bold text-dark"></i>
        
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div className="navbar-nav fs-5">
            <NavLink className={(navData) => (navData.isActive ? "active nav-link" : 'nav-link')} to="/">
              Figurer
            </NavLink>

            <NavLink to="/Episodes" className="nav-link">
              Episoder
            </NavLink>

            <NavLink to="/Location" className="nav-link">
              Lokasjoner
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

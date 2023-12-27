import { Menu } from "./Menu";
import { Search } from "./Search";
export const Navbar = ({ onSearchChange }) => {
  return (
    <nav className="navbar navbar-expand-lg bg_dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Menu />
        <Search onSearchChange={onSearchChange} />
      </div>
    </nav>
  );
};

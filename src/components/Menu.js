export const Menu = (second) => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a
            className="nav-link active text-light"
            aria-current="page"
            href="#"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/movie">
            Movie
          </a>
        </li>
      </ul>
    </div>
  );
};

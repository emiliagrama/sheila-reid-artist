import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="siteHeader">
      <div className="siteHeader__inner">
        <NavLink to="/artworks" className="siteBrand">
          Sheila Reid
        </NavLink>

        <nav className="siteNav">
          <NavLink
            to="/artworks"
            className={({ isActive }) =>
              isActive ? "siteNav__link active" : "siteNav__link"
            }
          >
            Artworks
          </NavLink>

          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? "siteNav__link active" : "siteNav__link"
            }
          >
            Books
          </NavLink>

          <NavLink
            to="/biography"
            className={({ isActive }) =>
              isActive ? "siteNav__link active" : "siteNav__link"
            }
          >
            Biography
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
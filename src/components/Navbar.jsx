import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="siteHeader">
      <div className="siteHeader__inner" ref={navRef}>
        <NavLink to="/artworks" className="siteBrand" onClick={closeMenu}>
          Sheila Reid
        </NavLink>

        <button
          className="menuToggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>

        <nav className={`siteNav ${open ? "open" : ""}`}>
          <NavLink
            to="/artworks"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "siteNav__link active" : "siteNav__link"
            }
          >
            Artworks
          </NavLink>

          <NavLink
            to="/books"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "siteNav__link active" : "siteNav__link"
            }
          >
            Books
          </NavLink>

          <NavLink
            to="/biography"
            onClick={closeMenu}
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
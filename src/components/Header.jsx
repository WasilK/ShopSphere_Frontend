import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg shopsphere-navbar">
      <div className="container">
        <Link className="navbar-brand shopsphere-logo" to="/">
          ShopSphere
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link shopsphere-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link shopsphere-link" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link shopsphere-link" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle shopsphere-link"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/category/electronics">
                    Electronics
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/category/clothing">
                    Clothing
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <Link className="dropdown-item" to="/products">
                    All Products
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2 shopsphere-search"
              type="search"
              placeholder="Search products..."
            />

            <button className="btn shopsphere-search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

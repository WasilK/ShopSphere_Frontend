import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">

          {/* Brand */}
          <div className="col-md-6 footer-brand">
            <h4>ShopSphere</h4>
            <p>
              Your one-stop destination for quality products
              at great prices.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-6 footer-links">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2026 ShopSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
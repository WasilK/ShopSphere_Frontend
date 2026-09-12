import { Header } from "../components/Header";
import "./Home.css";

export function Home({ isLoggedIn, setIsLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-content">
              <span className="hero-badge">Welcome to ShopSphere</span>

              <h1>
                Everything You Need,
                <span> All in One Place.</span>
              </h1>

              <p>
                Discover quality products at amazing prices. Shop your favorite
                products and get them delivered right to your doorstep.
              </p>

              <div className="hero-buttons">
                <button className="btn shop-btn">Shop Now</button>

                <button className="btn explore-btn">Explore Products</button>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image">
                <div className="shopping-icon">🛍️</div>
                <h3>Shop. Discover. Enjoy.</h3>
                <p>Everything you love, just a click away.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <div className="section-heading">
            <h2>Shop by Category</h2>
            <p>Find exactly what you're looking for</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4 col-lg-2">
              <div className="category-card">
                <div className="category-icon">👕</div>
                <h5>Fashion</h5>
              </div>
            </div>

            <div className="col-md-4 col-lg-2">
              <div className="category-card">
                <div className="category-icon">📱</div>
                <h5>Electronics</h5>
              </div>
            </div>

            <div className="col-md-4 col-lg-2">
              <div className="category-card">
                <div className="category-icon">🏠</div>
                <h5>Home</h5>
              </div>
            </div>

            <div className="col-md-4 col-lg-2">
              <div className="category-card">
                <div className="category-icon">🎮</div>
                <h5>Gaming</h5>
              </div>
            </div>

            <div className="col-md-4 col-lg-2">
              <div className="category-card">
                <div className="category-icon">💄</div>
                <h5>Beauty</h5>
              </div>
            </div>

            <div className="col-md-4 col-lg-2">
              <div className="category-card">
                <div className="category-icon">⚽</div>
                <h5>Sports</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">🚚</div>
                <div>
                  <h5>Fast Delivery</h5>
                  <p>Get your products delivered quickly.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <div>
                  <h5>Secure Payment</h5>
                  <p>Your payments are safe and secure.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">↩️</div>
                <div>
                  <h5>Easy Returns</h5>
                  <p>Simple and hassle-free returns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

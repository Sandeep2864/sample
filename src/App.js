import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header" data-header>
        <div className="container">
          <h1>
            <a href="https://www.sbi.co.in/help" className="logo">Popcorn<span className="span">.</span></a>
          </h1>
          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li className="nav-item">
                <a href="#home" className="navbar-link" data-nav-link>Home</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="navbar-link" data-nav-link>About Us</a>
              </li>
              <li className="nav-item">
                <a href="#food-menu" className="navbar-link" data-nav-link>Shop</a>
              </li>
              <li className="nav-item">
                <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
              </li>
              <li className="nav-item">
              <a href="https://www.sbi.co.in/help" className="footer-nav-link" data-footer-nav-link>Help Center</a>
              </li>
            </ul>
          </nav>
          <div className="header-btn-group">
            <button className="search-btn" aria-label="Search" data-search-btn>
              <ion-icon name="search-outline"></ion-icon>
            </button>
            <button className="btn btn-hover">Book now</button>
            <button className="nav-toggle-btn" aria-label="Toggle Menu" data-menu-toggle-btn>
              <span className="line top"></span>
              <span className="line middle"></span>
              <span className="line bottom"></span>
            </button>
          </div>
        </div>
      </header>

      <div className="search-container" data-search-container>
        <div className="search-box">
          <input type="search" name="search" aria-label="Search here" placeholder="Type keywords here..." className="search-input" />
          <button className="search-submit" aria-label="Submit search" data-search-submit-btn>
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
        <button className="search-close-btn" aria-label="Cancel search" data-search-close-btn></button>
      </div>

      <main>
        <article>
          <section className="hero" id="home" style={{ backgroundImage: "url('./assets/images/hero-bg.jpg')" }}>
            <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle">Enjoy movie with</p>
                <h2 className="h1 hero-title">Supper delicious Food at your seat</h2>
                <p className="hero-text">Food is any substance consumed to provide nutritional support for an organism.</p>
                <button className="btn">Book Now</button>
              </div>
              <figure className="hero-banner">
                <img src="./assets/images/hero-banner-bg.png" width="820" height="716" alt="" aria-hidden="true" className="w-100 hero-img-bg" />
                <img src="./assets/images/hero-banner.png" width="700" height="637" loading="lazy" alt="Burger" className="w-100 hero-img" />
              </figure>
            </div>
          </section>

          <section className="section food-menu" id="food-menu">
            <div className="container">
              <p className="section-subtitle">Popular Dishes</p>
              <h2 className="section-title">Delicious Food Menu</h2>
              <div className="food-menu-grid">
                <div className="food-menu-item">
                  <div className="food-menu-content">
                    <img src="./assets/images/food-menu-1.png" alt="Food Menu" className="food-menu-img" />
                    <h3 className="food-menu-title">Burger</h3>
                    <p className="food-menu-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <span className="food-menu-price">$9.99</span>
                  </div>
                </div>
                <div className="food-menu-item">
                  <div className="food-menu-content">
                    <img src="./assets/images/food-menu-2.png" alt="Food Menu" className="food-menu-img" />
                    <h3 className="food-menu-title">Pizza</h3>
                    <p className="food-menu-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <span className="food-menu-price">$11.99</span>
                  </div>
                </div>
                <div className="food-menu-item">
                  <div className="food-menu-content">
                    <img src="./assets/images/food-menu-3.png" alt="Food Menu" className="food-menu-img" />
                    <h3 className="food-menu-title">Fried Chicken</h3>
                    <p className="food-menu-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <span className="food-menu-price">$8.99</span>
                  </div>
                </div>
                <div className="food-menu-item">
                  <div className="food-menu-content">
                    <img src="./assets/images/food-menu-4.png" alt="Food Menu" className="food-menu-img" />
                    <h3 className="food-menu-title">Pasta</h3>
                    <p className="food-menu-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <span className="food-menu-price">$13.99</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      <footer className="footer">
        <div className="footer-top" style={{ backgroundImage: "url('./assets/images/footer-illustration.png')" }}>
          <div className="container">
            <div className="footer-top-content">
              <h3 className="footer-top-title">Subscribe to our Newsletter</h3>
              <p className="footer-top-text">Subscribe to our newsletter to receive the latest news, updates, and promotions.</p>
              <form className="footer-form">
                <input type="email" name="email" placeholder="Your email address" className="footer-input" required />
                <button type="submit" className="btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <nav className="footer-nav" data-footer-nav>
                <ul className="footer-nav-list">
                  <li className="footer-nav-item">
                    <a href="#home" className="footer-nav-link" data-footer-nav-link>Home</a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#about" className="footer-nav-link" data-footer-nav-link>About Us</a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#food-menu" className="footer-nav-link" data-footer-nav-link>Shop</a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#blog" className="footer-nav-link" data-footer-nav-link>Blog</a>
                  </li>
                  <li className="footer-nav-item">
                  <a href="https://www.sbi.co.in/help" className="footer-nav-link" data-footer-nav-link>Help Center</a>
                  </li>
                </ul>
              </nav>
              <div className="footer-social">
              <a href="https://www.facebook.com" className="footer-social-link" aria-label="Facebook">
  <ion-icon name="logo-facebook"></ion-icon>
               </a>
                <a href="https://twitter.com" className="footer-social-link" aria-label="Twitter">
  <ion-icon name="logo-twitter"></ion-icon>
                 </a>
                 <a href="https://www.instagram.com" className="footer-social-link" aria-label="Instagram">
  <ion-icon name="logo-instagram"></ion-icon>
                 </a>
                 <a href="https://www.youtube.com" className="footer-social-link" aria-label="YouTube">
  <ion-icon name="logo-youtube"></ion-icon>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

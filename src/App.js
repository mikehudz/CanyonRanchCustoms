import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
          <a href="https://www.etsy.com/shop/CanyonRanchCustoms" target="_blank" rel="noopener noreferrer">
            Shop
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <img src="FullLogo (2).jpg" alt="Canyon Ranch Customs Logo" id="logo" />
          <div className="bio">
            <p>
              Welcome to Canyon Ranch Customs! We are a small, family-owned business located in Laramie, Wyoming. Woodworking and craftsmanship is our passion. We recently purchased a new CNC machine which has allowed us to step up our production and expand our creativity. We take pride in our craftsmanship and commitment to quality. Our main business, Harding Homes Inc. builds custom homes which has given us experience in residential construction and the opportunity to develop our custom trim work and woodworking skills.
            </p>
          </div>
          <div className="features">
            <div>
              <img src="hammer-4-150.png" alt="Custom Woodwork" />
              <p>Custom Woodwork</p>
            </div>
            <div>
              <img src="rectangle-150.png" alt="Wyoming Made" />
              <p>Wyoming Made</p>
            </div>
            <div>
              <img src="truck-150.png" alt="Free Shipping" />
              <p>Free Shipping</p>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery">
          <img src="il_794xN.5812368881_rs8x.webp" alt="Gallery Image 1" />
          <img src="iap_640x640.5927156248_ocnvmks1.webp" alt="Gallery Image 2" />
          <img src="image5234.jpg" alt="Gallery Image 3" />
          <img src="image5227.jpg" alt="Gallery Image 4" />
          <img src="_image000000_.jpg" alt="Gallery Image 5" />
          <img src="image5255.jpg" alt="Gallery Image 6" />
          <img src="il_640xN.5610112679_kj3p.jpg" alt="Gallery Image 7" />
          <img src="image5256.jpg" alt="Gallery Image 8" />
          <img src="image5235.jpg" alt="Gallery Image 9" />
        </section>

        <section>
          <a href="https://www.etsy.com/shop/CanyonRanchCustoms" className="etsy-button" target="_blank" rel="noopener noreferrer">
            Visit Our Etsy Store
          </a>
        </section>

        <section id="contact" className="contact">
          <p>
            If you have any questions or special requests, please feel free to
            <a href="mailto:rylan@hardinghomesinc.com">email us</a>.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Canyon Ranch Customs. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

import React from "react";
import "./Homepage.css";

export default function ProductPage() {
  return (
    <main className="product-page">
      <section className="product-section">
        <h1 className="product-heading">Our Products</h1>
        <div className="product-item">
          <img
            className="product-image"
            src="src\assets\product-1.jpg"
            alt="product-1"
          ></img>
          <div className="product-details">
            <h2 className="product-title">Organic All-Purpose Fertilizer</h2>
            <p className="product-description">
              Give your plants the love they deserve with our premium Organic
              All-Purpose Plant Food. Specially formulated with natural,
              nutrient-rich ingredients, this fertilizer provides a balanced
              blend of essential nutrients for healthy growth and vibrant
              blooms. Suitable for use on a wide variety of plants, from
              vegetables to flowers, it promotes strong roots, lush foliage, and
              bountiful harvests. Trust in nature's goodness to nurture your
              garden!
            </p>
          </div>
        </div>
        <div className="product-item">
          <div className="product-details">
            <h2 className="product-title">Slow-Release Flower Fertilizer</h2>
            <p className="product-description">
              Elevate your flower game with our Blossom Boost Slow-Release Plant
              Fertilizer. This specially crafted formula is designed to provide
              a steady supply of nutrients to your flowering plants, ensuring a
              continuous display of beautiful, vibrant blooms. With a balanced
              blend of essential elements, it supports healthy growth, prolongs
              flowering periods, and enhances the overall vitality of your
              garden. Watch your garden burst into a colorful symphony of
              blossoms!
            </p>
          </div>
          <img
            className="product-image"
            src="src\assets\product-2.jpg"
            alt="product-2"
          ></img>
        </div>
        <div className="product-item">
          <img
            className="product-image"
            src="src\assets\product-3.jpg"
            alt="product-3"
          ></img>
          <div className="product-details">
            <h2 className="product-title">Citrus Tree Fertilizer</h2>
            <p className="product-description">
              Unleash the full potential of your citrus trees with our Citrus
              Bliss Nutrient-Rich Fertilizer. Tailored to meet the unique needs
              of citrus plants, this specialized blend is packed with essential
              nutrients that promote vigorous growth, lush foliage, and abundant
              fruiting. With an emphasis on providing the right balance of
              nitrogen, phosphorus, and potassium, it encourages robust root
              systems and helps prevent nutrient deficiencies. Elevate your
              citrus orchard to new heights of vitality and productivity!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

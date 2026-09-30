import React, { useState, useEffect } from "react";
import productsData from "../productsData";
import Footer from "./Footer";
import heroBanner from "../img/product_hero_banner.jpg";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "All",
    "Classic Creams",
    "Exotic Tropical",
    "Decadent Chocolate & Fudge",
    "Royal Indian Infusions",
    "Sorbets & Refreshers"
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((item) => item.category === selectedCategory);

  return (
    <div className="products-page">
      {/* 1. Header Banner & Hero Section */}
      <section className="products-hero">
        <div className="products-hero-content">
          <span className="products-pretitle">The Delicious Collection</span>
          <h1 className="products-title">Artisan Handcrafted Ice Creams</h1>
          <p className="products-tagline">
            Dive into over 20+ master-crafted recipes churned with fresh local dairy,
            sun-ripened orchard fruits, and centuries-old culinary passion in Anand, Gujarat.
          </p>
        </div>

        <div className="products-hero-banner-frame">
          <img
            src={heroBanner}
            alt="Handcrafted artisanal ice cream bowls"
            className="products-hero-image"
          />
          <div className="banner-badge">
            <span>✨ 4K Pure Quality • Light & Creamy</span>
          </div>
        </div>
      </section>

      {/* 2. Sliding Headline Ticker */}
      <div className="sliding-headline-container">
        <div className="sliding-headline-track">
          <div className="marquee-content">
            <span className="marquee-text">25+ Categories and 150+ Ice Creams to Choose From</span>
            <span className="marquee-bullet">★</span>
            <span className="marquee-text">Handcrafted Daily in Anand, Gujarat</span>
            <span className="marquee-bullet">★</span>
            <span className="marquee-text">25+ Categories and 150+ Ice Creams to Choose From</span>
            <span className="marquee-bullet">★</span>
            <span className="marquee-text">100% Pure Natural Ingredients</span>
            <span className="marquee-bullet">★</span>
          </div>
          <div className="marquee-content" aria-hidden="true">
            <span className="marquee-text">25+ Categories and 150+ Ice Creams to Choose From</span>
            <span className="marquee-bullet">★</span>
            <span className="marquee-text">Handcrafted Daily in Anand, Gujarat</span>
            <span className="marquee-bullet">★</span>
            <span className="marquee-text">25+ Categories and 150+ Ice Creams to Choose From</span>
            <span className="marquee-bullet">★</span>
            <span className="marquee-text">100% Pure Natural Ingredients</span>
            <span className="marquee-bullet">★</span>
          </div>
        </div>
      </div>

      {/* 3. Category Filter Navigation */}
      <section className="products-catalog-section">
        <div className="catalog-header">
          <h2>Explore Our 20+ Signature Flavors</h2>
          <p>Filter by flavor profile to discover your favorite scoop</p>

          <div className="category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-pill ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === "All" ? `All Flavors (${productsData.length})` : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Product Showcase Cards */}
        <div className="products-grid">
          {filteredProducts.map((item) => (
            <div key={item.id} className="product-card">
              <div className="card-image-wrap">
                <img
                  src={require(`../img/${item.img}`)}
                  alt={item.name}
                  className="product-card-img"
                  loading="lazy"
                />
                <span className="card-badge">{item.badge}</span>
              </div>

              <div className="card-body">
                <span className="card-category-label">{item.category}</span>
                <h3 className="card-title">{item.name}</h3>
                <p className="card-tagline">{item.tagline}</p>
                <p className="card-description">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Brand Hallmark Box */}
      <section className="parlor-hallmark">
        <div className="hallmark-box">
          <h3>Delicious Ice Cream Parlor</h3>
          <p className="hallmark-loc">📍 Near Amul Dairy Road • Anand, Gujarat 388001</p>
          <p className="hallmark-text">
            Every scoop is an artful celebration of creaminess, flavor notes, and pure joy.
            Visit our parlor or reach out to experience perfection in every single spoonful.
          </p>
        </div>
      </section>

      {/* 6. Footer Section */}
      <div className="divider-2"></div>
      <Footer />
    </div>
  );
}

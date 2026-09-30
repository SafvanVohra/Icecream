import React from "react";

export default function MenuCard({ items }) {
    const badges = [
        "Chef's Pick",
        "Top Trending",
        "Crowd Favorite",
        "Must Try",
        "Pure Classic",
        "Berry Special",
        "Rich & Creamy",
        "Artisanal Scoop",
        "House Special"
    ];

    return (
        <div id="product" className="menu">
            {items.map((item, idx) => (
                <div key={item.id} className="product-slide">
                    <section className="product">
                        <div className="product-img-wrap">
                            <img
                                className="product-img"
                                src={require(`../img/${item.img}`)}
                                alt={item.name}
                                loading="lazy"
                            />
                            <span className="product-badge">
                                {badges[idx % badges.length]}
                            </span>
                        </div>
                        <h3 className="product-name">{item.name}</h3>
                        <p className="product-desc">{item.desc}</p>
                    </section>
                </div>
            ))}
        </div>
    );
}

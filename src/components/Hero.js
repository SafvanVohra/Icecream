import { Link } from "react-router-dom";
import brandImg from "../img/hero_ice_cream_cone.png";

export default function Hero(){
    return(
        <section className="hero-section">
            <section className="about-brand">
                <section className="brand">
                    <span className="hero-mini-tag">Sweet &bull; Creamy</span>
                    <h1 className="brand-name">Delicious</h1>
                    <p className="brand-tag">Dive into a world of creamy perfection, where every bite tells a story of quality and delight.</p>
                </section>
                <section className="brand-img">
                    <img src={brandImg} alt="raspberry icecream"/>
                </section>
            </section>
            <button className="jump-menu"><Link to="/products">Explore Products</Link></button>
        </section>
    );
}
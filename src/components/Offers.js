export default function Offers(){
    return(
        <section className="delivery">
                <section className="contact">
                    <img className="contact-img" src={require("../img/delivery.png")} alt="delivery" />
                    <h3 className="contact-name">Fast Delivery</h3>
                    <p className="contact-desc">Enjoy your favorite ice cream at lightning speed with our fast delivery!</p>
                </section>
                <section className="contact">
                    <img className="contact-img" src={require("../img/package.png")} alt="order" />
                    <h3 className="contact-name">100% Pure</h3>
                    <p className="contact-desc">Indulge in the goodness of 100% pure, natural ingredients.</p>
                </section>
                <section className="contact">
                    <img className="contact-img" src={require("../img/discout.png")} alt="artisan" />
                    <h3 className="contact-name">Handcrafted</h3>
                    <p className="contact-desc">Lovingly made in Anand with authentic, premium ingredients!</p>
                </section>
            </section>
    )
}
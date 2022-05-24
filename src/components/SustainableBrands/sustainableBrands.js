import "./sustainableBrandsStyles.css"
import {Cards} from '../CommonComponent/cards'
const SustainableBrands = () => {

    const services = [
      {
        img: "https://static.wixstatic.com/media/272cf7_85bd2da00ccf4d9a86f2eda94b19111a~mv2.png/v1/fill/w_76,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/sustainability.png",
        alt: "Sustainability",
        title: "Sustainable Products",
        desc: "Buy sustainable zero-waste products from best brands.",
      },
      {
        img: "https://static.wixstatic.com/media/272cf7_f6bddb509d9d4f4192062f0f3418ea5d~mv2.png/v1/fill/w_205,h_80,al_c,lg_1,q_85,enc_auto/272cf7_f6bddb509d9d4f4192062f0f3418ea5d~mv2.png",
        alt: "Planet Care",
        title: "Planet Care",
        desc: "Buy sustainable Zero-waste products from best brands",
      },
      {
        img: "https://static.wixstatic.com/media/272cf7_d8cca9fbf15940d89bca76fffbcc4174~mv2.png/v1/fill/w_107,h_92,al_c,lg_1,q_85,enc_auto/272cf7_d8cca9fbf15940d89bca76fffbcc4174~mv2.png",
        alt: "Prakati",
        title: "Prakati",
        desc: "Buy sustainable Zero-waste products from best brands",
      },
      {
        img: "https://static.wixstatic.com/media/272cf7_16c9371c095f401c93d9f9246004f72d~mv2.png/v1/fill/w_212,h_85,al_c,lg_1,q_85,enc_auto/272cf7_16c9371c095f401c93d9f9246004f72d~mv2.png",
        alt: "Ecohoy",
        title: "Ecohoy",
        desc: "Buy sustainable Zero-waste products from best brands",
      },
      {
        img: "https://static.wixstatic.com/media/272cf7_c394cc3873a94c9bab2b1f74ea10705f~mv2.jpg/v1/fill/w_192,h_85,al_c,lg_1,q_80,enc_auto/272cf7_c394cc3873a94c9bab2b1f74ea10705f~mv2.jpg",
        alt: "The Sustainable Indian",
        title: "Prakati",
        desc: "Buy sustainable Zero-waste products from best brands",
      },
      {
        img: "https://static.wixstatic.com/media/272cf7_c394cc3873a94c9bab2b1f74ea10705f~mv2.jpg/v1/fill/w_192,h_85,al_c,lg_1,q_80,enc_auto/272cf7_c394cc3873a94c9bab2b1f74ea10705f~mv2.jpg",
        alt: "Earthsy.in",
        title: "Earthsy.in",
        desc: "Buy sustainable Zero-waste products from best brands",
      },
    ];

    const builtCards = services.map(service => <Cards service={service} />);

    return (
        <div className = "sustainable__brands__container">
            <h1>Sustainable Brands</h1>
            <div className="card__container">{builtCards}</div>
            <a href="#viewmore" className="view__more">
                View More
            </a>
        </div>
    )
}

export default SustainableBrands
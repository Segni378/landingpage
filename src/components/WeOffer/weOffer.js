import {Cards} from '../CommonComponent/cards'
import "./weOffer.css"
const WeOffer = () => {
    
    const services = [
      {
        img: "https://static.wixstatic.com/media/272cf7_85bd2da00ccf4d9a86f2eda94b19111a~mv2.png/v1/fill/w_76,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/sustainability.png",
        alt: "Sustainability",
        title: "Sustainable Products",
        desc: "Buy sustainable zero-waste products from best brands.",
      },
      {
        img: "https://static.wixstatic.com/media/272cf7_40028ca4a08346769adf960399e7b010~mv2.png/v1/fill/w_89,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/272cf7_40028ca4a08346769adf960399e7b010~mv2.png",
        alt: "B2B services",
        title: "B2B Services",
        desc: "Introducing sustainable culture in corporate environment.",
      },
      {
        img: "https://static.wixstatic.com/media/272cf7_688b3eb266084f59972bebd8ed91c439~mv2.png/v1/fill/w_76,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/272cf7_688b3eb266084f59972bebd8ed91c439~mv2.png",
        alt: "Our Community",
        title: "Our Community",
        desc: "Introducing sustainable culture in all communities.",
      },
    ];

    const builtCards = services.map(service => <Cards service={service} />);
    return (
      <div className="services__container">
        <div className = "services__heading">
          <h1>What We Offer</h1>
          <span>
            Qizaa is an All In One platform for Sustainable Products, B2B
            Sustainable Services, and Community Programs for a Sustainable
            Lifestyle.
          </span>
        </div>
        <div className="card__container">{builtCards}</div>
      </div>
    );
}

export default WeOffer
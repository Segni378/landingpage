import "./footerStyles.css"
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return (
      <footer className="footer__container">
        <div className="footer__info">
          <div className="footer___info-first">
            <div className="contact__us">
              <h3>Contact</h3>
              <p>
                483/14, Opp. Harikaka Compound, NH4, Belgavi-Hubli Service Road,
                Belgavi - Karnataka India - 590016
              </p>
              <p> Email- info@qizaa.com</p>
              <p>Call - +91 9075006557</p>
            </div>
            <div className="shop">
              <h3>Shop</h3>
              <p>
                <a href="#allproducts">
                  <span>All Products</span>
                </a>
              </p>
              <a href="#3liststyleproducts">Lifestyle Products</a>
              <a href="#organiceproducts">Organic Product</a>
              <a href="#tableware">Tableware</a>
            </div>
          </div>
          <div className="footer___info-second">
            <div className="Customer__support">
              <h3>Customer Support</h3>
              <a href="#contact">Contact Us</a>
              <a href="#help">Help Center</a>
              <a href="#about">About Us</a>
              <a href="#careers">Careers</a>
            </div>
            <div className="policy">
              <h3>Policy</h3>
              <a href="#contact">Shipping & Returns</a>
              <a href="#help">Terms & Conditions</a>
              <a href="#about">Privacy Policy</a>
              <a href="#careers">FAQ</a>
            </div>
            <div className="Policy"></div>
          </div>
        </div>

        <div className="footer__icons">
          <AiFillFacebook className="facebook__icon" />
          <FaInstagram className="instagram__icon" />
          <AiFillTwitterSquare className="twitter__icon" />
        </div>

        <div className="payment__methods-container">
          <h4>We accept the following paying methods</h4>
          <div className="payment__company-logo">
            <img
              src="https://static.wixstatic.com/media/c837a6_e8798fcfdaf144478a5c7da1ba28ff2c~mv2.png/v1/fill/w_60,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-mastercard%403x.png"
              alt="master card"
            />
            <img
              src="https://static.wixstatic.com/media/c837a6_2bd3e20d1e214eccb5e106fc6d1f535d~mv2.png/v1/fill/w_59,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-amex%403x.png"
              alt="master card"
            />
            <img
              src="https://static.wixstatic.com/media/272cf7_2094a5744240432d9685dc17965b2b35~mv2.png/v1/fill/w_99,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/272cf7_2094a5744240432d9685dc17965b2b35~mv2.png"
              alt="BHIM"
            />
            <img
              src="https://static.wixstatic.com/media/272cf7_3a9151013d67468eaee221a8332f481e~mv2.png/v1/fill/w_99,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Upi-Payment-Logo-white.png"
              alt="UPI"
            />
            <img
              src="https://static.wixstatic.com/media/84770f_27001c40036842889a78a72766ad4700~mv2.png/v1/fill/w_60,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Visa.png"
              alt="VISA"
            />
            <img
              src="https://static.wixstatic.com/media/84770f_8445424a46ca49f39359bf19d4a3e537~mv2.png/v1/fill/w_60,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PayPal.png"
              alt="Paypal"
            />
          </div>
        </div>

       
      </footer>
    );
}


export default Footer;
import React from 'react'
import logo from '../../assets/logo.jpg'
import qizaa from '../../assets/qizaa.jpg'
import {BsCart2} from 'react-icons/bs'
import {FaUserCircle} from 'react-icons/fa'
import "./navbarStyles.css"

const Navbar = () => {
    return (
      <nav>
        <div className="nav__links-container">
          <a href = "#home">
            <div className="log">
              <img src={logo} alt="Qizaa logo" className="qizaa-logo" />
              <img src={qizaa} alt="qizaa text" className="qizaa-text" />
            </div>
          </a>
          <ul className="nav__links">
            <li className="nav__item">
              <a href="#home" className="nav__link" id = "home-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#ourstore" className="nav__link">
                Our Store
              </a>
            </li>
            <li className="nav__item">
              <a href="#tableware" className="nav__link">
                Tableware
              </a>
            </li>
            <li className="nav__item">
              <a href="#sustainpackage" className="nav__link">
                Sustainable Packaging
              </a>
            </li>
            <li className="nav__item">
              <a href="buywholesale" className="nav__link">
                Buy Wholesale
              </a>
            </li>
            <li className="nav__item drop-down">
              <span>More</span>
              <div>
                <ul >
                  <li>
                    <a href="#lifestyle" className="nav__link">
                      Life Style Products
                    </a>
                  </li>
                  <li>
                    <a href="#organicproducts" className="nav__link">
                      Organic Products
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className = "nav__user">
            <ul className="nav__icons">
                <li className="nav__icon">
                    <BsCart2  className = "cart-icon" />
                </li>
                <li className="nav__icon">
                    <span>0</span>
                </li>
                <li className="nav__icon">
                    <FaUserCircle className = "user-icon" />
                </li>
            </ul>
          <a href="#joincommunity">Join Community</a>
        </div>
      </nav>
    );
}

export default Navbar;
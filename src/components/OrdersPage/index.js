import { Component } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { PiDiamondsFourLight } from "react-icons/pi";
import { TbDirectionSign } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { IoMdRadio } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
import "./index.css";

class OrdersPage extends Component {
  onClickBackArrowButton = () => {
    const { navigateTo } = this.props;
    navigateTo("profile");
  };

  render() {
    return (
      <div className="main-orders-bg-container">
        <div className="order-tab">
          <button
            className="arrow-button"
            onClick={this.onClickBackArrowButton}
          >
            <FiArrowLeft className="left-arrow" />
          </button>

          <h1 className="orders-heading"> ORDERS </h1>
        </div>
        <div className="noise-watch-container">
          <div className="help-container">
            <p className="help-description"> Help </p>
            <TfiHeadphoneAlt className="help-headset" />
          </div>
          <img
            className="noise-watch"
            alt="Noise ColorFit Pro 4 Smartwatch"
            src="https://res.cloudinary.com/dkbubzs9j/image/upload/v1710670503/noice-watch-colorfit_clca3g.png"
          />
          <h1 className="noise-title"> NOISE </h1>
          <p className="noise-description">
            {" "}
            ColorFit Pro 4 Smartwatch - Grey{" "}
          </p>
          <p className="noise-description"> Size: Onesize </p>
          <div className="delivered-container">
            <PiDiamondsFourLight className="delivery-icon" />
            <div className="delivery-description-container">
              <h1 className="delivered-heading"> Delivered </h1>
              <p className="delivered-description"> On Wed, 8 Feb </p>
            </div>
          </div>
        </div>
        <div className="express-delivery-container">
          <TbDirectionSign className="express-icon" />
          <p className="express-description">
            {" "}
            <span className="express-span"> EXPRESS </span> 2 Day Delivery{" "}
          </p>
        </div>
        <hr className="horizontal-rule" />
        <div className="exchange-container">
          <GoDotFill className="dot-icon" />
          <p className="exchange-description">
            {" "}
            Exchange/Return window closed on Fri, 10 Mar 2023{" "}
          </p>
        </div>
        <hr className="horizontal-rule-thicker" />
        <div className="rate-this-product-container">
          <img
            className="noise-sub-watch"
            src="https://res.cloudinary.com/dkbubzs9j/image/upload/v1710670503/noice-watch-colorfit_clca3g.png"
            alt="smart-watch"
          />
          <div className="rating-details-container">
            <h1 className="rating-description"> Rate this product </h1>
            <div className="stars-container">
              <CiStar className="star" />
              <CiStar className="star" />
              <CiStar className="star" />
              <CiStar className="star" />
              <CiStar className="star" />
            </div>
          </div>
        </div>
        <hr className="horizontal-rule-thicker" />
        <div className="similar-items-container">
          <h1 className="similar-items-heading">
            {" "}
            Items that go well with this item{" "}
          </h1>
          <div className="products-container">
            <div className="single-product-container">
              <img
                className="single-product-image"
                src="https://res.cloudinary.com/dkbubzs9j/image/upload/v1710679550/headphone-one_wg2xf6.jpg"
                alt="headphones"
              />
            </div>
            <div className="single-product-container">
              <img
                className="single-product-image"
                src="https://res.cloudinary.com/dkbubzs9j/image/upload/v1710679730/headphone-two_xu9i4a.jpg"
                alt="headphones"
              />
            </div>
            <div className="single-product-container">
              <img
                className="single-product-image"
                src="https://res.cloudinary.com/dkbubzs9j/image/upload/v1710684409/headphone-three_de0gei.jpg"
                alt="headphones"
              />
            </div>
          </div>
        </div>
        <hr className="horizontal-rule-thicker" />
        <div className="exchange-address-container">
          <h1 className="exchange-address-heading"> Exchange Address </h1>
          <p className="address-description">
            <b> Praveen Rajan | 9945781606 </b> <br />
            #88, Ramakka Garden, Ambedkar Nagar <br />
            main, Maheswari Nagar, Mahadevapura, Benguluru - 560048
          </p>
        </div>
        <hr className="horizontal-rule-thicker" />
        <div className="total-order-price-container">
          <div className="total-order-price">
            <h1 className="price-title"> Total Order Price </h1>
            <div className="price-container">
              <h1 className="price-title"> Rs.2999.00 </h1>
              <p className="view-breakage"> View Breakup </p>
            </div>
          </div>
          <div className="paid-by-upi-container">
            <img
              className="upi-image"
              src="https://res.cloudinary.com/dkbubzs9j/image/upload/v1710685760/upi-image_nehzre.jpg"
              alt="upi-pic"
            />
            <p className="upi-description"> Paid by UPI </p>
          </div>
        </div>
        <hr className="horizontal-rule" />
        <div className="item-sold-by-container">
          <p className="item-sold-by">
            {" "}
            Item sold by: Adilaxmi E-commerce Private Limited{" "}
          </p>
          <button className="get-invoice-button"> Get Invoice </button>
        </div>
        <hr className="horizontal-rule-thicker" />
        <div className="inspiration-container">
          <h1 className="inspiration-title">
            {" "}
            Inspiration from Myntra Studio{" "}
          </h1>
          <img
            className="person-image"
            src="https://res.cloudinary.com/dkbubzs9j/image/upload/v1710688801/person_ajevpi.jpg"
            alt="person"
          />
          <p className="person-description">
            {" "}
            keep calm and winter on! #menfashion menwinterwear m...
          </p>
          <hr className="horizontal-rule" />
          <div className="myntra-studio-container">
            <IoMdRadio className="radio-icon" />
            <p className="radio-description"> See more on Myntra Studio </p>
          </div>
        </div>
        <hr className="horizontal-rule-thicker" />
        <div className="updates-container">
          <h1 className="update-title"> Updates sent to </h1>
          <div className="contact-number-container">
            <IoCallOutline className="phone-icon" />
            <p className="contact-number"> 9945781606 </p>
          </div>
        </div>
        <hr className="horizontal-rule-thicker" />
        <p className="order-id"> Order ID # 1227672-5444692-9920901 </p>
      </div>
    );
  }
}
export default OrdersPage;

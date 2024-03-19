import { Component } from "react";
import { IoMdSearch } from "react-icons/io";
import { LuListFilter } from "react-icons/lu";
import { RiExchangeFill } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import RatingStars from "../RatingStars";
import { FiArrowLeft } from "react-icons/fi";

import "./index.css";

class ExchangeDelivered extends Component {
  onClickBackArrowButton = () => {
    const { navigateTo } = this.props;
    navigateTo("profile");
  };

  onClickWatchTab = () => {
    const { navigateTo } = this.props;
    navigateTo("orders");
  };

  render() {
    return (
      <div className="ordered-items-container">
        <div className="order-tab-2">
          <button
            className="arrow-button-2"
            onClick={this.onClickBackArrowButton}
          >
            <FiArrowLeft className="left-arrow-2" />
          </button>

          <h1 className="orders-heading-2"> ORDERS </h1>
        </div>
        <div className="search-bar-container">
          <div className="search-container">
            <IoMdSearch className="search-icon" />
            <input
              type="search"
              className="search-bar"
              id="search"
              placeholder="Search in orders"
            />
          </div>
          <div className="filter-container">
            <LuListFilter className="filter-icon" />

            <h1 className="filter-text"> FILTER </h1>
          </div>
        </div>

        <div className="whole-delivered-container-2">
          <RiExchangeFill className="exchange-icon-2" />
          <div className="delivered-container-2">
            <p className="delivered-heading-2"> Exchange Delivered </p>
            <p className="delivered-description-2"> On Wed, 8 Feb 2023 </p>
          </div>
        </div>

        <div className="noise-watch-container-2">
          <div
            className="main-watch-container-2"
            onClick={this.onClickWatchTab}
          >
            <img
              className="noise-watch-2"
              alt="Noise ColorFit Pro 4 Smartwatch"
              src="https://res.cloudinary.com/dkbubzs9j/image/upload/v1710670503/noice-watch-colorfit_clca3g.png"
            />
            <div className="watch-details-container-2">
              <h1 className="noise-title-2"> NOISE </h1>
              <p className="noise-description-2">
                {" "}
                ColorFit Pro 4 Smartwatch - Grey{" "}
              </p>
              <p className="noise-description"> Size: Onesize </p>
            </div>
          </div>
          <hr className="horizontal-rule-white" />
          <div className="exchange-container-2">
            <GoDotFill className="dot-icon-2" />
            <p className="exchange-description-2">
              {" "}
              Exchange/Return window closed on Fri, 10 Mar 2023{" "}
            </p>
          </div>
          <hr className="horizontal-rule-white" />

          {/* <hr className="horizontal-rule-thicker" /> */}

          <div className="rating-details-container-2">
            <h1 className="rating-description-2"> Rate product </h1>
            <div className="stars-container-2">
              <RatingStars />
            </div>
          </div>

          <div className="bought-container">
            <p className="bought-text"> Bought this for </p>
            <div className="names-container">
              <button className="name-button"> Praveen </button>
              <button className="name-button"> Add Profile </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExchangeDelivered;

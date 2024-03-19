import { Component } from "react";
import { PiDiamondsFourLight } from "react-icons/pi";
import { LiaCrownSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { PiMoneyBold } from "react-icons/pi";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { MdOutlinePayments } from "react-icons/md";
import { LuWallet2 } from "react-icons/lu";
import { PiNotePencilThin } from "react-icons/pi";
import { TbCircleArrowUp } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import { GiAlliedStar } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";

// import {BrowserRouter, Switch, Route} from 'react-router'
import "./index.css";

class Profile extends Component {
  onClickOrdersButton = () => {
    const { navigateTo } = this.props;
    navigateTo("exchange-delivered");
  };

  onClickNaveenAdminButton = () => {
    const { navigateTo } = this.props;
    navigateTo("home");
  };

  render() {
    return (
      <div className="profile-outer-container">
        <h1 className="profile-name"> Profile </h1>
        {/* <hr className="horizontal-rule" /> */}
        <div className="profile-inner-container">
          <div className="insider-container">
            <h1 className="user-name"> Naveen Rajan! </h1>
            <p className="paragraph">
              Unlock <span className="highlighted-text"> Free Shipping </span>
              and{" "}
              <span className="highlighted-text">
                Earn <br /> Supercoins{" "}
              </span>
              by becoming an Insider
            </p>
            <button className="know-more-button"> Know More </button>
          </div>
          <div className="second-container">
            <h1 className="shopping-for-title"> Shopping for Praveen </h1>
            <div className="admin-container">
              <div className="admin">
                <div
                  className="admin-button"
                  onClick={this.onClickNaveenAdminButton}
                >
                  {" "}
                  <h1 className="naveen">N</h1>
                  <p className="admin-color"> Admin </p>
                </div>
                <h1 className="naveen-title"> Naveen </h1>
              </div>

              <div className="admin">
                <div className="admin-button-praveen">
                  <h1 className="naveen">P</h1>
                </div>
                <h1 className="naveen-title"> Praveen </h1>
              </div>

              <div className="admin">
                <button className="admin-button-plus">+</button>
                <h1 className="add-title"> Add </h1>
              </div>
            </div>
          </div>
          <div className="basics-container">
            <button className="basics-button"> Basics </button>
            <button className="basics-button"> See Details </button>
            <button className="basics-button"> Skin & Hair </button>
          </div>
          <div className="orders-container">
            <button
              className="orders-button"
              onClick={this.onClickOrdersButton}
            >
              <PiDiamondsFourLight className="orders-icon" />
              Orders
            </button>
            <button className="orders-button">
              <LiaCrownSolid className="orders-icon" />
              Insider{" "}
            </button>
          </div>
          <div className="orders-container">
            <button className="orders-button">
              <TfiHeadphoneAlt className="orders-icon-for-headphones" />
              Help Center{" "}
            </button>
            <button className="orders-button">
              <PiMoneyBold className="orders-icon-for-coupons" />
              Coupons{" "}
            </button>
          </div>
          <hr className="horizontal-rule" />
          <div className="">
            <div className="myntra-container">
              <HiOutlineCreditCard className="credit-card-icon" />
              <div className="myntra-description-container">
                <h1 className="option-heading">
                  {" "}
                  Myntra Kotak Credit Card{"    "}
                  <span className="span-new-element"> New </span>
                </h1>
                <p className="option-description">
                  {" "}
                  Apply now to get 7.5% instant discount{" "}
                </p>
              </div>
            </div>
            <hr className="horizontal-rule-two" />
            <div className="myntra-container">
              <MdOutlinePayments className="credit-card-icon" />
              <div className="myntra-description-container">
                <h1 className="option-heading">
                  {" "}
                  Payments & Currencies{"    "}
                  <span className="span-new-element"> New </span>
                </h1>
                <p className="option-description">
                  {" "}
                  View balance and saved payment methods{" "}
                </p>
              </div>
            </div>
            <hr className="horizontal-rule-two" />
            <div className="myntra-container">
              <LuWallet2 className="credit-card-icon" />
              <div className="myntra-description-container">
                <h1 className="option-heading">
                  {" "}
                  Earn & Redeem{"    "}
                  {/* <span className="span-new-element"> New </span> */}
                </h1>
                <p className="option-description">
                  {" "}
                  Scan coupons, view prizes and earn rewards{" "}
                </p>
              </div>
            </div>
            <hr className="horizontal-rule-two" />
            <div className="myntra-container">
              <PiNotePencilThin className="credit-card-icon" />
              <div className="myntra-description-container">
                <h1 className="option-heading">
                  {" "}
                  Manage Account {"    "}
                  {/* <span className="span-new-element"> New </span> */}
                </h1>
                <p className="option-description">
                  {" "}
                  Your account details & saved addresses{" "}
                </p>
              </div>
            </div>
            <hr className="horizontal-rule-two" />
            <div className="myntra-container">
              <TbCircleArrowUp className="credit-card-icon" />
              <div className="myntra-description-container">
                <h1 className="option-heading">
                  {" "}
                  Challenges {"  "}
                  <span className="span-new-element"> New </span>
                </h1>
                <p className="option-description">
                  {" "}
                  Earn prizes by completing fun tasks{" "}
                </p>
              </div>
            </div>
            <hr className="horizontal-rule-two" />
            <div className="myntra-container">
              <GoHeart className="credit-card-icon" />
              <div className="myntra-description-container">
                <h1 className="option-heading"> Wishlist {"  "}</h1>
                <p className="option-description"> Your most loved styles </p>
              </div>
            </div>
            <hr className="horizontal-rule-two" />
            <div className="myntra-container">
              <GiAlliedStar className="credit-card-icon" />
              <div className="myntra-description-container">
                <h1 className="option-heading">
                  {" "}
                  Myntra Suggests {"  "}
                  <span className="span-new-element"> New </span>
                </h1>
                <p className="option-description">
                  {" "}
                  100% personalized feed just for you{" "}
                </p>
              </div>
            </div>
            <hr className="horizontal-rule-two" />
            <div className="myntra-container">
              <CiSettings className="credit-card-icon" />
              <div className="myntra-description-container">
                <h1 className="option-heading"> Settings {"  "}</h1>
                <p className="option-description"> Manage Notifications </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

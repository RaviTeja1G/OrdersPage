import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";

import { IoIosClose } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";

import "./index.css";

const ReactPopUp = (props) => {
  const revertBackToOrdersPage = () => {
    const { navigateTo } = props;
    navigateTo("orders");
  };

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            View Total Payment Information
          </button>
        }
      >
        {(close) => (
          <div className="whole-container">
            <div className="payment-info">
              <p className="payment-heading">Payment Information </p>
              <button
                type="button"
                className="pop-up-close"
                onClick={(() => close(), revertBackToOrdersPage)}
              >
                <IoIosClose />
              </button>
            </div>
            <div className="amount-container">
              <p className="no-of-products">
                {" "}
                1 x Noise ColorFit Pro 4 Smart Watch Grey ...
              </p>
              <p className="amount">
                <FaIndianRupeeSign className="first-rupee-symbol" /> 2,999.00
              </p>
            </div>
            <hr className="horizontal-rule-in-pop-up" />
            <div className="total-paid-container">
              <p className="total-heading"> Total Paid</p>
              <p className="paid-amount">
                {" "}
                <FaIndianRupeeSign className="second-rupee-symbol" /> 2,999.00{" "}
              </p>
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
        )}
      </Popup>
    </div>
  );
};
export default ReactPopUp;

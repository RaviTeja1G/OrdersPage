import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          style={{
            cursor: "pointer",
            fontSize: "27px",
            marginRight: "5px",
            margin: "0",
            color: index < rating ? "gold" : "gray",
          }}
        >
          &#9733;
        </span>
      ))}
      {/* <p>Selected Rating: {rating}</p> */}
    </div>
  );
};

export default StarRating;

import React from "react";

const MyntraContext = React.createContext({
  homePage: true,
  profilePage: false,
  ordersPage: false,
  changeActivePage: () => {},
});

export default MyntraContext;

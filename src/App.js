// import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
// import { Component } from "react";
// import MyntraContext from "./context/MyntraContext";
import Home from "./components/Home";
// import logo from "./logo.svg";
import Profile from "./components/Profile";
import OrdersPage from "./components/OrdersPage";

import "./App.css";

const App = () => {
  const [page, setPage] = useState("home");

  const navigateTo = (pageName) => {
    setPage(pageName);
  };

  return (
    <div>
      {/* <nav>
        <ul>
           <li>
            <button onClick={() => navigateTo("home")}>Home</button>
          </li> 
          <li>
            <button onClick={() => navigateTo("profile")}>About</button>
          </li>
          <li>
            <button onClick={() => navigateTo("orders")}>Contact</button>
          </li>
        </ul>
      </nav> */}
      <div>
        {page === "home" && <Home navigateTo={navigateTo} />}
        {page === "profile" && <Profile navigateTo={navigateTo} />}
        {page === "orders" && <OrdersPage navigateTo={navigateTo} />}
      </div>
    </div>
  );
};

// const Home = () => {
//   return <h1>Home Page</h1>;
// };

// const About = () => {
//   return <h1>About Page</h1>;
// };

// const Contact = () => {
//   return <h1>Contact Page</h1>;
// };

export default App;

//  <BrowserRouter>
//       <Routes>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/profile" component={Profile} />
//         <Route exact path="/orders" component={OrdersPage} />
//       </Routes>
//     </BrowserRouter>

// state = {
//     homePage: true,
//     profilePage: false,
//     ordersPage: false,
//   };

//   changeActivePage = (activeTab) => {
//     switch (activeTab) {
//       case "home":
//         return <Home />;
//         break;
//       case "profile":
//         return <Profile />;
//         break;
//       case "orders":
//         return <OrdersPage />;
//         break;
//       default:
//         return null;
//     }
//   };

//   render() {
//     const { homePage, profilePage, ordersPage } = this.state;
//     return (
//       <MyntraContext.Provider
//         value={{
//           homePage,
//           profilePage,
//           ordersPage,
//           changeActivePage: this.changeActivePage,
//         }}
//       >
//         <Home />
//         <Profile />
//         <OrdersPage />
//       </MyntraContext.Provider>
//     );
//   }
// }

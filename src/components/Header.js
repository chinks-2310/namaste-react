import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // If you want to make your component dynamic or if you want something to change in your component we use state variables

  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is btnName => called everytime btnName is updated

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" className="home-link"> Home </Link>
          </li>
          <li>
            <Link to="about" className="about-us-link"> About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="contact-us-link">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery" className="grocery-link">Grocery</Link>
          </li>
          <li>Cart</li>
          {/* <button
              className="login"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button> */}
          <li>
            <Link to="/login">{btnName}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./Header.css";
import Netflix from "../../assets/images/netflix logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="logo_nav">
        <div className="img_container">
          <img src={Netflix} alt="Netflix logo" width={100} height={50}></img>
        </div>
        <div className="header_left">
          <ul>
            <li></li>
            <li>Netflix</li>
            <li>Tv shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by languages</li>
          </ul>
        </div>
      </div>
      <div className="icons">
        <li>
          <SearchIcon color="inherit" style={{ color: "white" }} />
        </li>
        <li>
          <NotificationsIcon color="inherit" style={{ color: "white" }} />
        </li>
        <li>
          <AccountBoxIcon color="inherit" style={{ color: "white" }} />
        
        </li>
        <li>
        <ArrowDropDownIcon color="inherit" style={{ color: "white" }}/>
        </li>
      </div>
    </div>
  );
};

export default Header;

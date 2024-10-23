import React from "react";
import "./hedder.css";
import logo from "../../.../../assets/image/netflix.png";
import SearchIcon from "@mui/icons-material/Search";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";

const Hedder = () => {
  return (
    <>
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_left">
            <ul>
              <li>
                <img src={logo} alt="netflix" width="50" />
              </li>
              <li>Netflix</li>
              <li>Home</li>
              <li>Tvshow</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>Mylist</li>
              <li>Browse by language</li>
            </ul>
          </div>
          <div className="header_right">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <CircleNotificationsIcon />
              </li>
              <li>
                <AccountBoxRoundedIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hedder;

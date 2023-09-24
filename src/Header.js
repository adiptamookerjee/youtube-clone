import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

function Header() {
  const [inputSearch,setInputSearch] = useState("");//do not understand much

  return (
    <div className="header">

      <div class="header_left">
        <MenuIcon />

        <Link to="/">
        <img
          class="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt=""
        />
        </Link>


      </div>

      <div class="header_input">
        <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder="Search"/>

        <Link to={`/search/${inputSearch}`}>
          <SearchIcon class="header_inputButton"/>
        </Link>


      </div>

      <div class="header_icons">
        <VideoCallIcon className="header_icon"/>
        <AppsIcon className="header_icon"/>
        <NotificationsIcon className="header_icon"/>
        <AccountCircleSharpIcon className="header_icon"/>
      </div>
    </div>
  );
}

export default Header;

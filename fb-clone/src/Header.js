import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import FlagIcon from "@material-ui/icons/Flag";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from '@material-ui/icons/Forum';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import "/Users/beingrishisharma/Coding for Tech/fb-clone/fb-clone/src/Header.css";
import { Avatar, IconButton } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          alt="Facebook"
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook"></input>
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>beingrishisharma</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;

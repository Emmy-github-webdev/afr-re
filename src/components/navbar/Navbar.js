import React from "react";
import { FaSearch, FaBell} from "react-icons/fa";
import chat from '../../images/chat.png';
import app from '../../images/app-icon.png';
import user from '../../images/user-con.png';
import asset from '../../images/asset.png';
import homeicon from '../../images/home.png';
//import { TiThSmallOutline } from "react-icons/ti";
//import {BiMessageDetail} from "react-icons/bi";
//import ellipse from '../../images/ellipse2.png'
import './navbar.css';


const Navbar = () => {

  return (
    <div className="nav-container">
      <div className="nav-left-container">
        < img src={homeicon} alt='home icon'/>
        <ul>
          <li> <img src={asset} alt="asset"/> Ark</li>
          <li>Assest</li>
          <li>Account</li>
        </ul>
      </div>
      <div className="nav-right-container">
        <span>
          <input type="search"  placeholder="Search" className="search-input"/>
          <FaSearch />
        </span>
        <span className="bell-container">
          <FaBell className="bell" />
        </span>
        <span className="chat-containe">
          <img src={chat} alt='message'/>
        </span>
        <span className="app-icon"> 
          <img src={app} alt='app icon'/>
        </span>

        <span>
          <img src={user} alt="user"/>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
import React from "react";
import Sidebar from '../../components/sidebar/Sidebar';
import searchicon from '../../images/searchicon.png';
import './bid.css';

const Bid = () => {
  return (
    <div>
      <div>
        <Sidebar/>
      </div>
      <div className="main-content">
        <div className="main-body">
          <div class="my-input-container">
            <input  type="text" placeholder="Search Request"/>
            <img src={searchicon} alt="search"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bid;
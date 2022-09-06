import React from 'react';
import linear from '../../images/linearbar.png'
import './sidebar.css'

const Sidebar = () => {

  return (
    <div className='sidebar-container'>
      <div className='pat-bid-box'>
        <span>Patronise</span>
        <span>Bid</span>
      </div>
      <div className="sidebar-body">
        <h5>My Categories</h5>
        <ul>
          <li>Other-Admin Support</li>
          <li>Personal/Virtual Assistant</li>
          <li>Web Research</li>
        </ul>

        <div>
          <h5>Pro</h5>
          <p>icon</p>
        </div>

        <div>
          <h5>Visibility</h5>
          <p>Public</p>
        </div>

        <div>
          <h5>Availability</h5>
          <p>More than 30hr/week</p>
        </div>
        <div className='progress'>
          <span><img src={linear}/></span>
          <span><img src={linear}/></span>
          <span><img src={linear}/></span>
          100%
          <p>Add work History</p>
        </div>
        <div className='inventory'>
          <h5>Inventory</h5>
          <p>
            My Inventory
          </p>
        </div>
        <div>
          <h5>Bids</h5>
          <p>50 Available connects</p>
        </div>
      </div>
    </div>
  )
};

export default Sidebar;
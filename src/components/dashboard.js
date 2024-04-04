import React from "react";
import "./dashboardStyling.css";
import image from '../assets/img_5terre.jpg'

const Dashboard = () => {
  const image1 = 'img_5terre.jpg'
  return (
    <div>
      <div className="mainContainer">
        <div className="left-section">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="right-section">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="secondContainer">
        <div className="container">
          <h2>Top Destinations</h2>
          <div className="gallery-row">
              <div className="gallery">
        <a target="_blank" href={image1}>
          <img src={image} alt="Cinque Terre" width="600" height="400" />
        </a>
        <div className="desc">Add a description of the image here</div>
      </div>

      <div className="gallery">
        <a target="_blank" href={image1}>
          <img src={image} alt="Forest" width="600" height="400" />
        </a>
        <div className="desc">Add a description of the image here</div>
      </div>

      <div className="gallery">
        <a target="_blank" href={image1}>
          <img src={image} alt="Northern Lights" width="600" height="400" />
        </a>
        <div className="desc">Add a description of the image here</div>
      </div>

      <div className="gallery">
        <a target="_blank" href={image1}>
          <img src={image} alt="Mountains" width="600" height="400" />
        </a>
        <div className="desc">Add a description of the image here</div>
      </div>
          </div>
        
        </div>
        <div className="container">
          <div className="gallery-row">
              <div className="gallery">
        <a target="_blank" href={image1}>
          <img src={image} alt="Cinque Terre" width="600" height="400" />
        </a>
        <div className="desc">Add a description of the image here</div>
      </div>

      <div className="gallery">
        <a target="_blank" href={image1}>
          <img src={image} alt="Forest" width="600" height="400" />
        </a>
        <div className="desc">Add a description of the image here</div>
      </div>

      <div className="gallery">
        <a target="_blank" href={image1}>
          <img src={image} alt="Northern Lights" width="600" height="400" />
        </a>
        <div className="desc">Add a description of the image here</div>
      </div>

      <div className="gallery">
        <a target="_blank" href={image1}>
          <img src={image} alt="Mountains" width="600" height="400" />
        </a>
        <div className="desc">Add a description of the image here</div>
      </div>
          </div>
        
        </div>
        <div className="container">
      <div className="gallery-row">
        <div className="gallery">
            <h2>Services we offer</h2>
        </div>

        {/* Repeat the same structure for the remaining gallery items */}
        <div className="gallery">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>

        <div className="gallery">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>

        <div className="gallery">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
      </div>
    </div>
    <div className="container">
      <h2>Top Destinations Gallery</h2>
      <div className="gallery-row1">
        <div className="gallery1">
            <img src={image} alt="Cinque Terre" width="600" height="400"/>
            <img src={image} alt="Cinque Terre" width="600" height="400"/>
            <img src={image} alt="Cinque Terre" width="600" height="400"/>
            <img src={image} alt="Cinque Terre" width="600" height="400"/>
            <img src={image} alt="Cinque Terre" width="600" height="400"/>
            <img src={image} alt="Cinque Terre" width="600" height="400"/>
            <img src={image} alt="Cinque Terre" width="600" height="400"/>
            <img src={image} alt="Cinque Terre" width="600" height="400"/>
            <img src={image} alt="Cinque Terre" width="600" height="400"/>
          <div className="desc1">Add a description of the image here</div>
        </div>

        {/* Repeat the same structure for the remaining gallery items */}
        {/* Add additional images here */}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Dashboard;
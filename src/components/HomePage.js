import React from 'react';
import HomePageStyle from '../Styles/HomePageStyle.module.css';
import LeftMenu from './LeftMenu';

import avatar from '../Images/avatar.jpg';

const HomePage = () => {
  return (
    <div className={HomePageStyle.MainDiv}>
      <div className={HomePageStyle.RightSide}>
        <LeftMenu />
      </div>
      <div className={HomePageStyle.LeftSide}>
        <div className={HomePageStyle.contetntHome}>
          <div className={HomePageStyle.contetnRight}>
            <img
              alt="Pic"
              className={HomePageStyle.homePic}
              src={avatar}
              title=""
            />
          </div>
          <div className={HomePageStyle.contetnLeft}>
            <h1 className={HomePageStyle.t1}>دکتر ...</h1>
            <h3 className={HomePageStyle.t2}>دکترای ...</h3>
            <h5 className={HomePageStyle.t3}>عضو ...</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

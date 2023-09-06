import React, { Component } from 'react';
import style from '../Styles/LeftMenuStyle.module.css';
import { Link } from 'react-router-dom';

import homeIcon from '../Images/homeIcon.png';
import teachIcon from '../Images/teachIcon.png';
import aboutUsIcon from '../Images/aboutUsIcon.png';
import contactUsIcon from '../Images/contactUsIcon.png';

class LeftMenu extends Component {
  render() {
    return (
      <div className={style.TopMenu}>
        <Link to="/">
          <div className={style.menuItem}>
            <img
              alt="menuIcon"
              className={style.homeIconPic}
              src={homeIcon}
              title="خانه"
            />
          </div>
        </Link>
        <Link to="/Courses">
          <div className={style.menuItem}>
            <img
              alt="menuIcon"
              className={style.homeIconPic}
              src={teachIcon}
              title="دوره ها"
            />
          </div>
        </Link>
        <Link to="/AboutUs">
          <div className={style.menuItem}>
            <img
              alt="menuIcon"
              className={style.homeIconPic}
              src={aboutUsIcon}
              title="سوابق"
            />
          </div>
        </Link>
        <Link to="/ContactUs">
          <div className={style.menuItem}>
            <img
              alt="menuIcon"
              className={style.homeIconPic}
              src={contactUsIcon}
              title="ارتباط با ما"
            />
          </div>
        </Link>
      </div>
    );
  }
}

export default LeftMenu;

//زمانیکه از تگ
//a
//برای لینک دهی در صفحات تک صفحه ای استفاده می کنیم هربار که یک بخش سایت را می آوریم صفحه ریلود می شود
//برای جلوگیری از اینکار بجای ان از تگ لینک استفاده شده است که قبل از استفاده باید آن را ایمپورت کرد
//دستور ایمپورت و تگ لینک استفاده شده در خط 2 و خطوط 16 تا 27 است

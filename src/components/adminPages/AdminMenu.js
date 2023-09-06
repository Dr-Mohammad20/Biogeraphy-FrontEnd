import React, { useContext } from 'react';
import Style from '../../Styles/AdminMenuStyle.module.css';
import { Link } from 'react-router-dom';

import userPic from '../../Images/userManage.png';
import coursePic from '../../Images/courseManage.png';
//context
import { LoginContext2 } from '../../context/LoginContextProvider2';

const AdminMenu = () => {
  const { dispatch } = useContext(LoginContext2);
  const clickHandler = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <div className={Style.TopMenu}>
      <Link to="/users">
        <div className={Style.menuItem}>
          <img
            alt="مدیریت کاربران"
            className={Style.homeIconPic}
            src={userPic}
            title="مدیریت کاربران"
          />
          <label>مدیریت کاربران</label>
        </div>
      </Link>
      <Link to="/CourseAdmin">
        <div className={Style.menuItem}>
          <img
            alt="مدیریت دوره ها"
            className={Style.homeIconPic}
            src={coursePic}
            title="مدیریت دوره ها"
          />
          <label>مدیریت دوره ها</label>
        </div>
      </Link>
      <Link to="/">
        <div className={Style.buttoncontainer}>
          <button
            className={`${Style.btnHover} ${Style.btnHoverColor1}`}
            onClick={clickHandler}>
            خروج
          </button>
        </div>
      </Link>
    </div>
  );
};

export default AdminMenu;

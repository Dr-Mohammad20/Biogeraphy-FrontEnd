import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Styles from '../../Styles/Login.module.css';
import { toast } from 'react-toastify';
//context
import { LoginContext2 } from '../../context/LoginContextProvider2';

const Login = () => {
  const { dispatch } = useContext(LoginContext2);
  const [userData, setUserData] = useState({
    userName: '',
    password: '',
  });

  let navigate = useNavigate();
  const clickHandler = async () => {
    await axios
      .post(`http://localhost:3001/login`, {
        user: userData.userName,
        pass: userData.password,
      })
      .then((response) => {
        if (response.data[0] !== undefined) {
          dispatch({ type: 'LOGIN' });
          toast.success('خوش آمدید');
          navigate('/users');
        } else {
          toast.error('نام کاربری یا رمز عبور اشتباه است');
        }
      });
  };
  const changeHandler = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <div className={Styles.Container}>
      <div className={Styles.FormLogin}>
        <label>نام کاربری</label>
        <input
          name="userName"
          type="text"
          onChange={changeHandler}
          value={userData.userName}
          required
        />
        <label>رمز عبور</label>
        <input
          name="password"
          type="password"
          onChange={changeHandler}
          value={userData.password}
          required
        />
        <div className={Styles.btt}>
          <button
            className={`${Styles.btnHover} ${Styles.btnHoverColor1}`}
            onClick={clickHandler}>
            ورود
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

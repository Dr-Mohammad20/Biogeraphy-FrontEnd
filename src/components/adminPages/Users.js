import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from '../../Styles/UsersAdmin.module.css';
import { toast } from 'react-toastify';
import AdminMenu from './AdminMenu';
import {
  getUsers,
  deleteUser,
  updateUser,
  insertUser,
} from '../../services/userApi';
//context
import { LoginContext2 } from '../../context/LoginContextProvider2';

function Users(props) {
  const { state } = useContext(LoginContext2);

  //States
  const [NewUserData, setNewUserData] = useState([]);
  const [UserData, setUserData] = useState([]);
  const [SelectedUserData, setSelectedUserData] = useState([]);
  /////////////////////////////////////////////////////////////////
  //Handler Function
  const ChangeHandlerNewUser = (event) => {
    setNewUserData({ ...NewUserData, [event.target.name]: event.target.value });
  };
  const ChangeHandlerUpdateUser = (event) => {
    setSelectedUserData({
      ...SelectedUserData,
      [event.target.name]: event.target.value,
    });
  };
  /////////////////////////////////////////////////////////////////
  //Insert New User
  const InsertNewUserHandler = () => {
    if (!NewUserData.username || !NewUserData.password) {
      toast.error('لطفا داده های مورد نیاز را وارد کنید');
    } else {
      const username = NewUserData.username;
      const password = NewUserData.password;
      insertUser(username, password);
      setNewUserData({
        username: '',
        password: '',
      });
      toast.success('کاربر جدید با موفقیت ثبت شد');
    }
  };
  /////////////////////////////////////////////////////////////////
  //Select User For Update & Delete
  const SelectUserHandler = (item) => {
    setSelectedUserData({
      id: item.id,
      username: item.username,
      password: item.password,
    });
  };
  /////////////////////////////////////////////////////////////////
  //Update User
  const UpdateUserHandler = () => {
    if (!SelectedUserData.username || !SelectedUserData.password) {
      toast.error('لطفا کاربر مورد نظر را برای به روز رسانی انتخاب کنید');
    } else {
      const id = SelectedUserData.id;
      const username = SelectedUserData.username;
      const password = SelectedUserData.password;
      updateUser(id, username, password);
      setSelectedUserData({
        id: '',
        username: '',
        password: '',
      });
      toast.success('اطلاعات کاربر با موفقیت به روز رسانی شد');
    }
  };
  /////////////////////////////////////////////////////////////////
  //Delete User
  const deleteUserHandler = (id) => {
    if (!SelectedUserData.username || !SelectedUserData.password) {
      toast.error('لطفا کاربر مورد نظر خود را برای حذف کردن انتخاب کنید');
    } else {
      deleteUser(id);
    }
    setSelectedUserData({
      id: '',
      username: '',
      password: '',
    });
    toast.success('کاربر با موفقیت حذف شد');
  };
  /////////////////////////////////////////////////////////////////
  //Get User
  let navigate = useNavigate();
  useEffect(() => {
    if (state.user === false) {
      navigate('/login');
    }
    const fetchApi = async () => {
      setUserData(await getUsers());
    };
    fetchApi();
  });
  /////////////////////////////////////////////////////////////////
  return (
    <div className={Styles.MainDiv}>
      <div className={Styles.RightSide}>
        <AdminMenu />
      </div>
      <div className={Styles.LeftSide}>
        <div className={Styles.Container}>
          <div className={Styles.UserManage}>
            <div className={Styles.AddUser}>
              <div className={Styles.InputContainer}>
                <label>نام کاربری</label>
                <input
                  name="username"
                  type="text"
                  onChange={ChangeHandlerNewUser}
                  value={NewUserData.username}
                />
                <label>رمز عبور</label>
                <input
                  name="password"
                  type="text"
                  onChange={ChangeHandlerNewUser}
                  value={NewUserData.password}
                />
              </div>
              <div className={Styles.ButtonContainer}>
                <button
                  className={`${Styles.btnHover} ${Styles.btnHoverColor1}`}
                  onClick={InsertNewUserHandler}>
                  ثبت کاربر جدید
                </button>
              </div>
            </div>

            <div className={Styles.UpdateUser}>
              <div className={Styles.UpdateUserUpSection}>
                <label>نام کاربری جدید</label>
                <input
                  type="text"
                  name="username"
                  onChange={ChangeHandlerUpdateUser}
                  value={SelectedUserData.username}
                />
                <label>رمز عبور جدید</label>
                <input
                  type="text"
                  name="password"
                  onChange={ChangeHandlerUpdateUser}
                  value={SelectedUserData.password}
                />
              </div>
              <div className={Styles.UpdateUserDownSection}>
                <button
                  className={`${Styles.btnHover} ${Styles.btnHoverColor1}`}
                  onClick={() => {
                    deleteUserHandler(SelectedUserData.id);
                  }}>
                  حذف
                </button>
                <button
                  className={`${Styles.btnHover} ${Styles.btnHoverColor1}`}
                  onClick={UpdateUserHandler}>
                  به روز رسانی
                </button>
              </div>
            </div>
          </div>
          <div className={Styles.UserShowContainer}>
            {UserData.map((item) => (
              <div
                key={item.id}
                className={Styles.ContainerUser}
                onClick={() => {
                  SelectUserHandler(item);
                }}>
                <p>UserName : {item.username}</p>
                <p>password : {item.password}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;

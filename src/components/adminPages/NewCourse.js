import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from '../../Styles/NewCourse.module.css';
import { toast } from 'react-toastify';
import { insertCourse } from '../../services/courseApi';
//context
import { LoginContext2 } from '../../context/LoginContextProvider2';

const NewCourse = () => {
  const { state } = useContext(LoginContext2);

  const [NewCourse, setNewCourse] = useState([]);

  const changeHandler = (event) => {
    setNewCourse({ ...NewCourse, [event.target.name]: event.target.value });
  };
  let navigate = useNavigate();
  useEffect(() => {
    if (state.user === false) {
      navigate('/login');
    }
  });
  //Insert New Course
  const addNewCourseHandler = () => {
    if (!NewCourse.name_dore) {
      toast.error('لطفا اطلاعات درس را به صورت کامل وارد کنید');
    } else {
      const name = NewCourse.name_dore;
      insertCourse(name);
      setNewCourse({
        name_dore: '',
      });
      toast.success('درس جدید با موفقیت ثبت شد');
      navigate('/CourseAdmin');
    }
  };
  /////////////////////////////////////////////////////////////////
  return (
    <div className={Styles.Container}>
      <textarea
        className={Styles.InputBox}
        rows="5"
        cols="60"
        name="name_dore"
        placeholder="نام دوره"
        onChange={changeHandler}
        value={NewCourse.name_dore}
      />
      <div className={Styles.BtnContainer}>
        <label>افزودن دوره جدید </label>
        <button
          className={`${Styles.btnHover} ${Styles.btnHoverColor1}`}
          onClick={addNewCourseHandler}>
          ثبت
        </button>
      </div>
    </div>
  );
};

export default NewCourse;

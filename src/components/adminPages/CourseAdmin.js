import { useNavigate } from 'react-router-dom';
import Styles from '../../Styles/CourseAdmin.module.css';

import AdminMenu from './AdminMenu';

//context
import { LoginContext2 } from '../../context/LoginContextProvider2';
import NewCourse from './NewCourse';

import React, { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import {
  getCourses,
  deleteCourse,
  updateCourse,
} from '../../services/courseApi';
// Component

function CourseAdmin() {
  const { state } = useContext(LoginContext2);
  // States
  const [data, setData] = useState([]);
  const [selecetedCourse, setselecetedCourse] = useState([]);
  ////////////////////////////////////////////////////////////////////////
  //Event Handler
  const SelecteCourseHandler = (item) => {
    setselecetedCourse({
      id: item.id,
      name_dore: item.name,
    });
  };
  const changeHandler = (event) => {
    setselecetedCourse({
      ...selecetedCourse,
      [event.target.name]: event.target.value,
    });
  };
  const updateHandler = () => {
    if (!selecetedCourse.name_dore) {
      toast.error('لطفا درس مورد نظر را برای به روز رسانی انتخاب کنید');
    } else {
      const id = selecetedCourse.id;
      const name = selecetedCourse.name_dore;
      updateCourse(id, name);
      setselecetedCourse({
        id: '',
        name_dore: '',
      });
      toast.success('اطلاعات درس با موفقیت به روز رسانی شد');
    }
  };
  const deleteHandler = (id) => {
    if (!id) {
      toast.error('لطفا درس مورد نظر را برای حذف انتخاب کنید');
    } else {
      deleteCourse(id);
      setselecetedCourse({
        id: '',
        name_dore: '',
      });
      toast.success('درس با موفقیت حذف شد');
    }
  };
  ////////////////////////////////////////////////////////////////////////
  //Get Course data
  let navigate = useNavigate();
  useEffect(() => {
    if (state.user === false) {
      navigate('/login');
    }
    const fetchApi = async () => {
      setData(await getCourses());
    };
    fetchApi();
  });
  return (
    <div className={Styles.MainDiv}>
      <div className={Styles.RightSide}>
        <AdminMenu />
      </div>
      <div className={Styles.LeftSide}>
        <div className={Styles.Container}>
          <div className={Styles.Navbar}>
            <div className={Styles.NewCourseContainer}>
              <NewCourse />
            </div>
            <div className={Styles.SelectedCourseContainer}>
              <textarea
                className={Styles.InputBox}
                rows="5"
                cols="60"
                name="name_dore"
                placeholder="نام دوره"
                onChange={changeHandler}
                value={selecetedCourse.name_dore}
              />
              <div className={Styles.buttonContainer}>
                <button
                  className={`${Styles.btnHover} ${Styles.btnHoverColor1}`}
                  onClick={updateHandler}>
                  به روز رسانی
                </button>
                <button
                  className={`${Styles.btnHover} ${Styles.btnHoverColor1}`}
                  onClick={() => {
                    deleteHandler(selecetedCourse.id);
                  }}>
                  حذف
                </button>
              </div>
            </div>
          </div>
          <div className={Styles.contentTech}>
            {data.map((item, index) => (
              <div
                className={Styles.Dore}
                key={item.id}
                onClick={() => SelecteCourseHandler(item)}>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseAdmin;

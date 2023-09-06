import React, { useState, useEffect } from 'react';
import LeftMenu from './LeftMenu';
import Style from '../Styles/CourseStyle.module.css';
import { getCourses } from '../services/courseApi';

const Courses = () => {
  const [data, setData] = useState([]);
  //Get Course data
  const loadData = async () => {
    setData(await getCourses());
  };
  useEffect(() => {
    loadData();
  }, []);
  ////////////////////////////////////////////////////////////////////////

  return (
    <div className={Style.MainDiv}>
      <div className={Style.RightSide}>
        <LeftMenu />
      </div>
      <div className={Style.LeftSide}>
        <div className={Style.Container}>
          <div className={Style.Header}>
            تمامی دوره ها بصورت کارگاه نیز برگزار می شود ، برای کسب اطلاعات
            بیشتر با ما تماس بگیرید .
          </div>
          <div className={Style.contentTech}>
            {data.map((item) => (
              <div className={Style.Dore} key={item.id}>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

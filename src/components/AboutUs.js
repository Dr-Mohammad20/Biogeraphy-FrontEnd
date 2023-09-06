import React, { Component } from 'react';
import AboutUsStyle from '../Styles/AboutUsStyle.module.css';
import { Link, Outlet } from 'react-router-dom';
import LeftMenu from './LeftMenu';

class AboutUs extends Component {
  render() {
    return (
      <div className={AboutUsStyle.MainDiv}>
        <div className={AboutUsStyle.RightSide}>
          <LeftMenu />
        </div>
        <div className={AboutUsStyle.LeftSide}>
          <div className={AboutUsStyle.contentAbout}>
            <div className={AboutUsStyle.selectorAbout}>
              <Link to="Tahsil">
                <button className={AboutUsStyle.Btn}>سوابق تحصیلی</button>
              </Link>
              <Link to="Pazhouhesh">
                <button className={AboutUsStyle.Btn}>سوابق پژوهشی</button>
              </Link>
              <Link to="Darman">
                <button className={AboutUsStyle.Btn}>سوابق درمانی</button>
              </Link>
              <Link to="Amouzesh">
                <button className={AboutUsStyle.Btn}>سوابق آموزشی</button>
              </Link>
              <Link to="Ejra">
                <button className={AboutUsStyle.Btn}>سوابق اجرایی</button>
              </Link>
            </div>
            <div className={AboutUsStyle.aboutParag}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;

//در ری اکت روتردام6 در کامپاننتهایی که خودشان دارای روت هستند مانند همین کامپاننت
//َAboutUs
//نیاز نیست آدرس ها را کامل بنویسیم و فقط آدرس کامپاننت زیر مجموعه را می نویسیم
//مثال آدرسهای خط 12 تا 16 که فقط نام کامپاننت نوشته شده

//در ری اکت روتردام6 از دستور
//Outlet
//برای مشخص کردن محل نمایش کامپاننتهای زیر مجموعه صفحه که لینکهای آنها در خط12 تا 16 نوشته شده استفاده میشود
//ضمنا در ابتدای برنامه باید اوتلت ایمپورت شود

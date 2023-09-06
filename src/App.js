//import React, { Component } from "react";
import React, { Component } from 'react';
import AppStyle from './Styles/AppStyle.module.css';
import { Route, Routes, Navigate } from 'react-router-dom';
// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//component imported
import ContactUs from './components/ContactUs';
import Courses from './components/Courses';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import AboutUs from './components/AboutUs';
import Tahsil from './components/Tahsil';
import Pazhouhesh from './components/Pazhouhesh';
import Darman from './components/Darman';
import Amouzesh from './components/Aamouzesh';
import Ejra from './components/Ejra';
// Admin Panel
import Login from './components/adminPages/Login';
import Users from './components/adminPages/Users';
import CourseAdmin from './components/adminPages/CourseAdmin';
import NewCourse from './components/adminPages/NewCourse';
///////////////////////////////////////////////

class App extends Component {
  render() {
    return (
      <>
        <ToastContainer position="top-center" />
        <div className={AppStyle.MainDiv}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/AboutUs/*" element={<AboutUs />}>
              <Route path="Tahsil" element={<Tahsil />} />
              <Route path="Pazhouhesh" element={<Pazhouhesh />} />
              <Route path="Darman" element={<Darman />} />
              <Route path="Amouzesh" element={<Amouzesh />} />
              <Route path="Ejra" element={<Ejra />} />
              <Route path="" element={<Tahsil />} />
            </Route>
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<Navigate to="/notfound" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
            <Route path="/CourseAdmin/*" element={<CourseAdmin />}>
              <Route path="NewCourse" element={<NewCourse />} />
              {/* <Route path="" element={<CourseUpdDel />} /> */}
            </Route>
          </Routes>
        </div>
      </>
    );
  }
}

export default App;

// در ری اکت روتردام 6 برای کامپاننتهایی که درون خودشان زیر مجموعه و روت دارن
// باید پس از آدرس خودشان یک */ بگذاریم تا کامپاننتهای زیر مجموعه آن نمایش داده شود
// مثال در خط 27

// در ری اکت روتردام 6 تمامی روتها را باید درون روتز بپیچیم مانند خط 23 تا 30
// در ری اکت روتردام 6 برای فراخوانی کامپاننت از دستور المنت بجای دستور کامپاننت استفاده می شود

// در ری اکت روتردام6 مسیرهای زیر مجموعه کامپاننتها را میتوان درون تگ باز و بسته همان کامپاننت نوشت
// این کار باعث بالا رفتن خوانایی برنامه می شود - مثال خط 34 تا 41

// برای ریدایرکت کردن در ری اکت روتردام6 از دستور نویگیت استفاده می شود که در ابتدا باید ایمپورت شود
// مثال آن در خط 44 نوشته شده است

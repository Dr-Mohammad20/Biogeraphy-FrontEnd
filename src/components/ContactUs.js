import React, { Component } from 'react';
import ContactUsStyle from '../Styles/ContactUsStyle.module.css';

import LeftMenu from './LeftMenu';

import telegramIcon from '../Images/telegramIcon.png';
import whatsupIcon from '../Images/whatsupIcon.png';
import instagramIcon from '../Images/instagramIcon.png';
import emailIcon from '../Images/emailIcon.png';

class ContactUs extends Component {
  render() {
    return (
      <div className={ContactUsStyle.MainDiv}>
        <div className={ContactUsStyle.RightSide}>
          <LeftMenu />
        </div>
        <div className={ContactUsStyle.LeftSide}>
          <div className={ContactUsStyle.contentContactUs}>
            <div className={ContactUsStyle.mainDivContact}>
              <div className={ContactUsStyle.AdressLeft}>
                <h1 className={ContactUsStyle.Font1}>آدرس :</h1>
                <h3 className={ContactUsStyle.Font3}>
                  استان ... ، شهرستان ... ، ...
                </h3>
                <h3 className={ContactUsStyle.Font3}>
                  تلفن : 09160000000 - 06600000000
                </h3>
                <div className={ContactUsStyle.AdressDown}>
                  <a href="https://telegram.me/...">
                    <img
                      className={ContactUsStyle.contactIcon}
                      src={telegramIcon}
                      alt="telegram"
                      title="تلگرام"
                    />
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=989160000000">
                    <img
                      className={ContactUsStyle.contactIcon}
                      src={whatsupIcon}
                      alt="whatsup"
                      title="واتس آپ"
                    />
                  </a>
                  <a href="https://instagram.com/...">
                    <img
                      className={ContactUsStyle.contactIcon}
                      src={instagramIcon}
                      alt="instagram"
                      title="اینستاگرام"
                    />
                  </a>
                  <a href="a@a.ir">
                    <img
                      className={ContactUsStyle.contactIcon}
                      src={emailIcon}
                      alt="Email"
                      title="ایمیل"
                    />
                  </a>
                </div>
              </div>
              <div className={ContactUsStyle.AdressRight}>
                <iframe
                  title="Location"
                  className={ContactUsStyle.Map}
                  src=""></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;

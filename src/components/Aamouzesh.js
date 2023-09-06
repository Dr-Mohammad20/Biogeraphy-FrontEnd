import React, { Component } from 'react';
import SabegheStyle from '../Styles/SabegheStyle.module.css';

class Aamouzesh extends Component {
  render() {
    return (
      <div className={SabegheStyle.aboutStyleParag} id="amouzesh">
        <h1 className={SabegheStyle.h1Font}>سوابق آموزشی</h1>
        <h3 className={SabegheStyle.h3Font}>
          سابقه هجده سال تدریس در دانشگاه علوم پزشکی لرستان ، دانشگاه پیام نور
          لرستان و دانشگاه علمی - کاربردی بهزیستی
        </h3>
        <h3 className={SabegheStyle.h3Font}>
          اجرای کارگاه های متعدد درمانی و آموزشی در بیمارستان روانپزشکی مهر و
          دانشگاه علوم پزشکی لرستان
        </h3>
      </div>
    );
  }
}

export default Aamouzesh;

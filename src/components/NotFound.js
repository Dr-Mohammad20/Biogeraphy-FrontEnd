import React, { Component } from 'react';
import NotFoundStyle from '../Styles/NotFoundStyle.module.css';
import LeftMenu from './LeftMenu';

class NotFound extends Component {
    render() {
        return (
            <div className={NotFoundStyle.MainDiv}>
                <div className={NotFoundStyle.RightSide}>
                    <LeftMenu />
                </div>
                <div className={NotFoundStyle.LeftSide}>
                    <div className={NotFoundStyle.Main}>
                        <h3 className={NotFoundStyle.Font}>This Path not Found!!!</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;
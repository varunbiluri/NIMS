import React from 'react';
import hospitalLogo from './assests/images/logo 2.jpg';
import './styles/Loading.css';

const Loading = () => {
    return (
        <div className="loading-container">
            <img src={hospitalLogo} alt="Hospital Logo" className="hospital-logo" />
            <div className="spinner"></div>
        </div>
    );
};

export default Loading;

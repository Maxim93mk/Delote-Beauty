import React from "react";
import './welcome-popup.css';

function WelcomePopup() {


    return (
        <>
            <section className="welcome-section">
                <div className="welcome-block-list">
                    <h1 className="welcome-title">Добро пожаловать!</h1>
                    <p className="welcome-descr">Салон красоты «Delote-Beauty» на Крестовском</p>
                    <button className="close-welcome-popup-btn">Закрыть</button>
                </div>
            </section>
        </>
    );
}

export default WelcomePopup;
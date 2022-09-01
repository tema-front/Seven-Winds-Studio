import { FC } from "react";

// Декоративный компонент
export const Header: FC = () => {
    return (
        <header className="header">
            <div className="header-wrp">
                <div className="header-management">
                    <button className="header-menu-btn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4H4V0H0V4ZM6 16H10V12H6V16ZM0 16H4V12H0V16ZM0 10H4V6H0V10ZM6 10H10V6H6V10ZM12 0V4H16V0H12ZM6 4H10V0H6V4ZM12 10H16V6H12V10ZM12 16H16V12H12V16Z" fill="#A1A1AA" /></svg>
                    </button>
                    <button className="header-menu-btn">
                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 4V0L0 7L7 14V9.9C12 9.9 15.5 11.5 18 15C17 10 14 5 7 4Z" fill="#A1A1AA" /></svg>
                    </button>
                </div>
                <nav className="header-navigation">
                    <button className="header-navigation-item actived">Просмотр</button>
                    <button className="header-navigation-item">Управление</button>
                </nav>
            </div>
            <div className="header-profile">
                <img src={require('../imgs/profileImg.png')} alt="profile" className="header-profile-img" />
                <span className="header-profile-name">Антон Петров</span>
                <button className="header-profile-btn">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.41 0.590027L6 5.17003L10.59 0.590027L12 2.00003L6 8.00003L0 2.00003L1.41 0.590027Z" fill="white" /></svg>
                </button>
            </div>
        </header>
    );
}
import { FC, useState } from "react";

// Декоративный компонент
export const NavBar: FC = () => {
    const [navigationList, setNavigationList] = useState<String[]>(
        ["По проекту", "Объекты", "РД", "МТО", "СМР", "График", "МиМ", "Рабочие", "КапВложения", "Бюджет", "Финансирование", "Панорамы", "Камеры", "Поручения", "КонтрАгенты"]
    );

    return (
        <nav className="navbar">
            <button className="navbar-btn">
                <div className="navbar-btn-wrp">
                    <span className="navbar-btn-title">Название проекта</span>
                    <span className="navbar-btn-subtitle">Аббревиатура</span>
                </div>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.41 0.590027L6 5.17003L10.59 0.590027L12 2.00003L6 8.00003L0 2.00003L1.41 0.590027Z" fill="white" /></svg>
            </button>
            <ul className="navbar-list">
                {navigationList.map((item, i) => (
                    <li key={i} className="navbar-list-item">
                        <div className="navbar-list-item-img">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 9.91667H8.08333V0.75H0.75V9.91667ZM0.75 17.25H8.08333V11.75H0.75V17.25ZM9.91667 17.25H17.25V8.08333H9.91667V17.25ZM9.91667 0.75V6.25H17.25V0.75H9.91667Z" fill="white" /></svg>
                        </div>
                        <span className="navbar-list-item-name">{item}</span>
                    </li>
                ))}

            </ul>
        </nav>
    );
}
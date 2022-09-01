import { FC } from "react";
import { NavBar } from "./NavBar";
import { Table } from "./Table";

// Декоративный компонент
export const Content: FC = () => {
    return (
        <div className="content">
            <NavBar />
            <div className="table-wrp">
                <div className="table-heading">
                    <span className="table-heading-txt">Строительно-монтажные работы</span>
                </div>
                <Table />
            </div>
        </div>
    )
}
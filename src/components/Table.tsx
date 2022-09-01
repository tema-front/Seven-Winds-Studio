import { FC } from "react";
import { TableList } from "./TableList";

export const Table: FC = () => {
    return (
        <table className="table">
            <thead>
                <tr className="table-titles">
                    <th className="table-titles-item">Уровень</th>
                    <th className="table-titles-item">Наименование работ</th>
                    <th className="table-titles-item">Ед. изм.</th>
                    <th className="table-titles-item ">Количество</th>
                    <th className="table-titles-item">Цена за ед.</th>
                    <th className="table-titles-item">Стоимость</th>
                </tr>
            </thead>
            <TableList />
        </table >
    )
}
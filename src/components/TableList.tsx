import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { TableListItem } from "./TableListItem";

export const TableList: FC = () => {
    const tableList = useSelector((state: RootState) => state.stateRows.tableList);

    return (
        <tbody>
            {tableList.map((row, i): React.ReactNode => {
                if (!row.parent) return <TableListItem row={row} nesting={1} key={i} />
            })}
        </tbody>
    )
}
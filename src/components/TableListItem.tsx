import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { RowData } from "../types/types";
import { EditableRow } from "./EditableRow";
import { ReadyRow } from "./ReadyRow";

interface TableListItemProps {
    row: RowData
    nesting: number // число, указывающее уровень вложенности для строки (используется для верстки)
    index?: number // индекс строки (используется для верстки)
}

// Комопнент для отображения строки
// Работает так: если у строки присутствует флаг editable,  
// который означает, что это редактируемая строка или новая созданная строка и она должна открыться в режиме редактирования (Компонент EditableRow)
// Иначе отображается готовая строка (Компонент ReadyRow)
export const TableListItem: FC<TableListItemProps> = ({ row, nesting, index }) => {
    const tableList = useSelector((state: RootState) => state.stateRows.tableList);

    return (
        <>
            {row.editable
                ? <EditableRow row={row} nesting={nesting} index={index} key={row.id} />
                : <ReadyRow row={row} nesting={nesting} key={row.id} />
            }
            {row.children?.length && row.children.map(
                (childId, index) => <TableListItem row={tableList.filter(item => item.id === childId)[0]} nesting={nesting + 1} index={index + 1} key={index} />
            )}
        </>
    )
}

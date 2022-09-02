import { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { RowData } from "../types/types";

interface NestingLineProps {
    row: RowData
    nesting: number // число, указывающее уровень вложенности для строки (используется для верстки)
}
// Компонент элемента вёрстки (линия вложенности)
export const NestingLine: FC<NestingLineProps> = ({ row, nesting }) => {
    const tableList = useSelector((state: RootState) => state.stateRows.tableList);
    let lineRef = useRef<HTMLHRElement>(null);

    // Функция по настройке вёрстки (регулирование положения и длины линий вложенности)
    const countLineLength = (line: any, row: RowData, nesting: number): void => {
        debugger
        if (!row.children || !line.current) return;
        let lastChildId: number = row.children?.slice(-1)[0]
        let lastChildIndex: number = tableList.findIndex(row => row.id === lastChildId);
        let othersNesting = tableList.filter(
            item => (
                item.nesting >= tableList[lastChildIndex].nesting
                &&
                (
                    item.parent === row.id
                    || (item.parent && row.children?.includes(item.parent))
                )
            )
        )
        let lineLength: number = 65 * othersNesting.length;
        if (row.nesting === 1 && tableList[lastChildIndex].nesting === 2 && tableList[lastChildIndex].children?.length) {
            lineLength = lineLength - (65 * tableList[lastChildIndex].children!.length)
        }
        line.current!.style.height = `${lineLength}px`
        line.current!.style.left = `${20 * nesting}px`
    }

    useEffect(() => {
        countLineLength(lineRef, row, nesting)
    })

    return (
        <hr ref={lineRef} className="table-row-item-line" />
    )
}
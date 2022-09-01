import { FC, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { recalculation, saveRow } from "../store/table/actions";
import { RowData } from "../types/types";

interface EditableRowProps {
    row: RowData
    nesting: number // число, указывающее уровень вложенности для строки (используется для верстки)
    index?: number // индекс строки (используется для верстки)
}

// Компонент редактируемой строки
export const EditableRow: FC<EditableRowProps> = ({ row, nesting, index }) => {
    const [title, setTitle] = useState<string>('');
    const [unit, setUnit] = useState<string>('');
    const [quantity, setQantity] = useState<number>(0);
    const [unitPrice, setUnitPrice] = useState<number>(0);
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus()
    }, [])

    const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const unitChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUnit(e.target.value);
    }

    const quantityChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQantity(e.target.valueAsNumber);
    }

    const unitPriceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUnitPrice(e.target.valueAsNumber);
    }

    // Обработчик сохранения строки
    const saveRowHandler = (e: React.FormEvent<HTMLFormElement>, editableRow: RowData) => {
        e.preventDefault();
        if ((editableRow.type === "row" && (!title || !unit || !quantity || !unitPrice)) || (editableRow.type === "level" && !title)) return;
        dispatch(saveRow(editableRow.id, title, unit, quantity, unitPrice));
        dispatch(recalculation(editableRow.parent));

        setTitle("");
        setUnit("");
        setQantity(0);
        setUnitPrice(0);
    }

    return (
        <>
            <th className="table-row-item editable">
                <form onSubmit={e => saveRowHandler(e, row)}>
                    {row.type === "level"
                        ? <input ref={inputRef} value={title} onChange={titleChangeHandler} type="text" placeholder={`Уровень № ${nesting}`} />
                        : <input ref={inputRef} value={title} onChange={titleChangeHandler} type="text" placeholder={`Статья работы № ${index}`} />
                    }
                </form>
            </th>
            <th className="table-row-item editable">
                {row.type === "row" &&
                    <form onSubmit={e => saveRowHandler(e, row)}>
                        <input value={unit} onChange={unitChangeHandler} type="text" placeholder={`л`} />
                    </form>
                }
            </th>
            <th className="table-row-item editable">
                {row.type === "row" &&
                    <form onSubmit={e => saveRowHandler(e, row)}>
                        <input value={quantity} onChange={quantityChangeHandler} type="number" placeholder={`1 200`} />
                    </form>
                }
            </th>
            <th className="table-row-item editable">
                {row.type === "row" &&
                    <form onSubmit={e => saveRowHandler(e, row)}>
                        <input value={unitPrice} onChange={unitPriceChangeHandler} type="number" placeholder={`850`} />
                    </form>
                }
            </th>
            <th className="table-row-item">{row.price}</th>
        </>
    )
}
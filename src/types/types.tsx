export interface NewRowData {
    title: string // Наименование работ
    unit: string // Ед. изм.
    quantity: number // Количество
    unitPrice: number // Цена за ед.
    price: number // Стоимость

    parent: number | null
    children: number[] | null // массив id дочерних строк
    type: 'level' | 'row'
    nesting: number // уровень вложенности строки в таблице (нужно для вёрстки)
}

export interface RowData extends NewRowData {
    id: number
}

export interface tableState {
    tableList: RowData[],
}

export type tableActions = CreateRow | SaveRow | EditRow | Recalculation;

export enum TableActionTypes {
    CREATE_ROW = "CREATE_ROW",
    SAVE_ROW = "SAVE_ROW",
    EDIT_ROW = "EDIT_ROW",
    RECALCULATION = "RECALCULATION"
}

interface CreateRow {
    type: TableActionTypes.CREATE_ROW;
    payload: { parentId: number, rowType: "level" | "row", id: number, nesting: number }
}

interface SaveRow {
    type: TableActionTypes.SAVE_ROW;
    payload: { id: number, title: string, unit: string, quantity: number, unitPrice: number }
}

interface EditRow {
    type: TableActionTypes.EDIT_ROW;
    payload: { rowId: number }
}

interface Recalculation {
    type: TableActionTypes.RECALCULATION;
    payload: { parentId: number | null }
}
export const CREATE_ROW = 'CREATE_ROW';
export const SAVE_ROW = 'SAVE_ROW';
export const EDIT_ROW = 'EDIT_ROW';
export const RECALCULATION = 'RECALCULATION';

export const createRow = (parentId: number, rowType: "level" | "row", id: number, nesting: number) => ({
    type: CREATE_ROW,
    payload: { parentId, rowType, id, nesting }
})

export const saveRow = (id: number, title: string, unit: string, quantity: number, unitPrice: number) => ({
    type: SAVE_ROW,
    payload: { id, title, unit, quantity, unitPrice }
})

export const editRow = (rowId: number) => ({
    type: EDIT_ROW,
    payload: { rowId }
})

export const recalculation = (parentId: number | null) => ({
    type: RECALCULATION,
    payload: { parentId }
})



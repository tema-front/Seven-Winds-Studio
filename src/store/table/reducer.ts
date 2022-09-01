import { RowData, tableActions, TableActionTypes, tableState } from "../../types/types";

const initialState: tableState = {
    tableList: [
        {
            title: "",
            unit: "",
            quantity: 0,
            unitPrice: 0,
            price: 0,
            parent: null,
            children: null,
            type: "level",
            id: 154543543,
            nesting: 1
        }
    ],
}

export const tableReducer = (state = initialState, { type, payload }: tableActions): tableState => {

    switch (type) {
        case TableActionTypes.CREATE_ROW: {
            let newTableList: RowData[] = [...state.tableList];
            const parentIndex: number = state.tableList.findIndex(row => row.id === payload.parentId);

            if (!payload.parentId) return {
                ...state,
                tableList: [...newTableList,
                {
                    title: "",
                    unit: "",
                    quantity: 0,
                    unitPrice: 0,
                    price: 0,
                    parent: null,
                    children: null,
                    type: payload.rowType,
                    id: payload.id,
                    nesting: payload.nesting
                }
                ]
            }

            if (!Array.isArray(newTableList[parentIndex].children)) newTableList[parentIndex].children = []
            newTableList[parentIndex].children?.push(payload.id);

            return {
                ...state,
                tableList: [...newTableList,
                {
                    title: "",
                    unit: "",
                    quantity: 0,
                    unitPrice: 0,
                    price: 0,
                    parent: payload.parentId,
                    children: null,
                    type: payload.rowType,
                    id: payload.id,
                    nesting: payload.nesting
                }
                ]
            }

            // let newTableList: RowData[] = [...state.tableList];
            // const parentIndex: number = state.tableList.findIndex(row => row.id === payload.parentId);
            // let newTableData: RowData[] = [...state.tableList];

            // if (!Array.isArray(newTableData[parentIndex].children)) newTableData[parentIndex].children = []
            // newTableData[parentIndex].children?.push(payload.id);

            // return {
            //     ...state,
            //     tableList: [...newTableList,
            //     {
            //         title: "",
            //         unit: "",
            //         quantity: 0,
            //         unitPrice: 0,
            //         price: 0,
            //         parent: payload.parentId,
            //         children: null,
            //         type: payload.rowType,
            //         id: payload.id,
            //         nesting: payload.nesting
            //     }
            //     ]
            // }
        }

        case TableActionTypes.SAVE_ROW: {
            const rowIndex: number = state.tableList.findIndex(row => row.id === payload.id);

            let newTableList: RowData[] = [...state.tableList];
            newTableList[rowIndex] = {
                ...newTableList[rowIndex],
                title: payload.title,
                unit: payload.unit,
                quantity: payload.quantity,
                unitPrice: payload.unitPrice,
                price: payload.quantity * payload.unitPrice
            }

            return {
                ...state,
                tableList: [...newTableList]
            }
        }

        case TableActionTypes.EDIT_ROW: {
            let newTableList: RowData[] = [...state.tableList];
            const rowIndex: number = state.tableList.findIndex(row => row.id === payload.rowId);
            newTableList[rowIndex].title = "";

            return {
                ...state,
                tableList: [...newTableList]
            }
        }

        case TableActionTypes.RECALCULATION: {
            const storage: RowData[] = [...state.tableList];
            const changedRows: RowData[] = []

            if (payload.parentId == null) return state
            let currentParentIndex = storage.findIndex((v) => v.id === payload.parentId)
            if (currentParentIndex === -1) return state
            let currentParent = storage[currentParentIndex]

            do {
                const children = storage.filter((v) => v.parent === currentParent.id)
                const newPrice = children.reduce((acc, v) => acc + v.price, 0)
                if (currentParent.price === newPrice) break

                storage[currentParentIndex].price = newPrice
                changedRows.push(storage[currentParentIndex])

                currentParentIndex = storage.findIndex((v) => v.id === currentParent.parent)
            } while (currentParentIndex !== -1)

            return {
                ...state,
                tableList: [...storage]
            }
        }

        default: return state;
    }
}
import { IEmployee } from "../types/types"

export interface IEmployeeReducerState {
    employees: IEmployee[]
}

export type IEmployeeReducerAction = addEmployeeAction | deleteEmployeeAction

interface addEmployeeAction {
    type: 'addEmployee',
    payload: IEmployee
}

interface deleteEmployeeAction {
    type: 'deleteEmployee',
    id: string
}

// type Action =
//  | { type: 'request' }
//  | { type: 'success', results: HNResponse }
//  | { type: 'failure', error: string };
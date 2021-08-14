import React from 'react';
import { IEmployeeReducerAction, IEmployeeReducerState } from '../types/EmployeeReducerTypes';

const employeeReducer: React.Reducer<IEmployeeReducerState, IEmployeeReducerAction> = (state, action) => {
    switch (action.type) {
        case 'addEmployee':
            return { ...state, employees: [action.payload, ...state.employees] };
        case 'deleteEmployee': {
            return { ...state, employees: [...state.employees].filter(employee => employee.id !== action.id) }
        }
    }
}

export default employeeReducer
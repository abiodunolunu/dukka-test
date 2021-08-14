import React, { createContext, useContext, useEffect, useReducer } from "react";
import employeeReducer from "../components/Reducers/EmployeeReducer";
import { IEmployeeReducerState } from "../components/Reducers/EmployeeReducerTypes";
import { IEmployeeContext } from "../components/types/types";

const EmployeeContext = createContext({} as IEmployeeContext);

export const useEmployee = () => useContext(EmployeeContext);

const initialEmployeeReducerState: IEmployeeReducerState = {
  employees: [],
};

const EmployeesContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(employeeReducer, initialEmployeeReducerState, () => {
    const localData = localStorage.getItem("employees");
    return {
      employees: localData ? JSON.parse(localData) : [],
    };
  });

  const { employees } = state;

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return <EmployeeContext.Provider value={{ employees, dispatch }}>{children}</EmployeeContext.Provider>;
};

export default EmployeesContextProvider;

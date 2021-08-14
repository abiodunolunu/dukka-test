import { IEmployeeReducerAction, IEmployeeReducerState } from "../Reducers/EmployeeReducerTypes";

export interface IEmployee {
  id: string;
  fullname: string;
  phone: number | string;
  email: string;
  positon: string;
  salary: number;
  imageUrl: string;
}

export interface IEmployeeContext extends IEmployeeReducerState {
  dispatch: React.Dispatch<IEmployeeReducerAction>;
}

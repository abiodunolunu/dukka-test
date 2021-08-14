import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEmployee } from "../../contexts/EmployeesContext";
import Employee from "../Employee/Employee";
import { IEmployee } from "../types/types";
import styles from "./EmployeeDetails.module.scss";

function formatRandomNumber(min: number, max: number) {
  const number = Math.floor(Math.random() * (max - min + 1) + min);

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "ngn",
  }).format(number);
}

const EmployeeDetails = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const { employees } = useEmployee();

  const [employee, setEmployee] = useState<IEmployee | null>();

  useEffect(() => {
    const employeeById = employees.find((emp) => emp.id === id);
    if (employeeById) {
      setEmployee(employeeById);
    } else {
      setEmployee(null);
    }
  }, [employees, id]);

  return employee ? (
    <div className={styles.details + " container"}>
      <Employee employee={employee} />
      <div>
        <p className={styles.heading}>LOAN RECORD</p>

        {["JAN", "FEB", "MAR", "APR", "MAY"].reverse().map((m) => {
          return (
            <div className={styles.loan}>
              <div className={styles["loan-month"]}>
                <i className="fas fa-calendar-alt"></i>
                <p>{m}</p>
              </div>
              <div className={styles["loan-amount"]}>
                <p>
                  <span>BORROWED:</span> {formatRandomNumber(50_000, 100_000)}
                </p>
                <p>
                  <span>RECEIVABLE:</span>
                  {formatRandomNumber(75_000, 190_000)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
};

export default EmployeeDetails;

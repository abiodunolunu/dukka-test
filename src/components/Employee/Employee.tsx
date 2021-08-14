import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEmployee } from "../../contexts/EmployeesContext";
import { IEmployee } from "../types/types";
import styles from "./Employee.module.scss";

interface employeeProps {
  employee: IEmployee;
}

const Employee: React.FC<employeeProps> = ({ employee }) => {
  const history = useHistory();
  const [error, setError] = useState("");
  const { dispatch } = useEmployee();

  const removeEmployee = () => {
    dispatch({ type: "deleteEmployee", id: employee.id });
  };

  const editEmployee = () => {
    setError("This feature is not available at the moment.");

    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const goToEmployeePage = () => {
    history.push(`/employee/${employee.id}`);
  };

  return (
    <>
      <div className={styles.employee}>
        <div className={styles["image__wrapper"]}>
          <img src={employee.imageUrl} alt="Employee Avatar" onClick={goToEmployeePage} style={{ cursor: "pointer" }} />
        </div>
        <div className={styles["info"]}>
          <h3 onClick={goToEmployeePage} style={{ cursor: "pointer" }}>
            {employee.fullname}
          </h3>
          <p>{employee.positon}</p>
          <p>{employee.phone}</p>
          <p>{employee.email}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={editEmployee}>
            <i className="fas fa-edit"></i>
          </button>
          <button onClick={removeEmployee}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>

      {error ? <p className={styles.error}>{error}</p> : null}
    </>
  );
};

export default Employee;

import { useEmployee } from "../../contexts/EmployeesContext";
import Employee from "./Employee";
import styles from "./Employee.module.scss";

const EmployeeList = () => {
  const { employees } = useEmployee();

  return (
    <div className="container" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <p style={{ textTransform: "uppercase", fontSize: "18px" }}>Employees</p>
      {employees.length > 0 ? (
        <div className={styles["employee-list"]}>
          {employees.map((employee) => {
            return <Employee employee={employee} key={employee.id} />;
          })}
        </div>
      ) : (
        <p style={{ color: "#3a3a3a", padding: "2rem 0", textAlign: "center" }}>There are no employees yet ...</p>
      )}
    </div>
  );
};

export default EmployeeList;

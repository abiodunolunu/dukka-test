import faker from "faker";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { v4 as uuid } from "uuid";
import { useEmployee } from "../../contexts/EmployeesContext";
import { IEmployee } from "../types/types";
import styles from "./CreateEmployeeForm.module.scss";

type FormValues = {
  email: string;
  fullname: string;
  phone: string;
  position: string;
  salary: string;
};

const CreateEmployeeForm = () => {
  const history = useHistory();
  const { dispatch } = useEmployee();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const newEmployee: IEmployee = {
      id: uuid(),
      email: data.email,
      fullname: data.fullname,
      phone: data.phone,
      positon: data.position,
      salary: +data.salary,
      imageUrl: faker.image.avatar(),
    };

    dispatch({ type: "addEmployee", payload: { ...newEmployee } });
    history.push("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p style={{ textTransform: "uppercase", fontSize: "18px", padding: "2rem 0" }}>CREATE EMPLOYEE PROFILE</p>
        <div className={styles["form-item"]}>
          <label htmlFor="#">Full name *</label>
          <input {...register("fullname", { required: "Full name is required" })} type="text" name="fullname" />

          {errors.fullname && <p>{errors.fullname.message}</p>}
        </div>
        <div className={styles["form-item"]}>
          <label htmlFor="#">Phone Number *</label>
          <input {...register("phone", { required: "Enter a mobile number" })} type="text" name="phone" />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div className={styles["form-item"]}>
          <label htmlFor="#">Email *</label>
          <input {...register("email", { required: "Email field is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email" } })} type="text" name="email" />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className={styles["form-item"]}>
          <label htmlFor="#">Position *</label>
          <input {...register("position", { required: "Position is required" })} type="text" name="position" />
          {errors.position && <p>{errors.position.message}</p>}
        </div>

        <div className={styles["form-item"]}>
          <label htmlFor="#">Salary *</label>
          <input {...register("salary", { required: "Position is required", valueAsNumber: true })} type="number" name="salary" />
          {errors.salary && <p>{errors.salary.message}</p>}
        </div>

        <button type="submit" className={styles["submit-btn"]}>
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateEmployeeForm;

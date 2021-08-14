import { Route } from "react-router-dom";
import "./App.css";
import CreateEmployeeForm from "./components/CreateEmployeeForm/CreateEmployeeForm";
import EmployeeList from "./components/Employee/EmployeeList";
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails";
import NavBar from "./components/NavBar/NavBar";

const routes = [
  {
    path: "/",
    component: EmployeeList,
    exact: true,
  },
  {
    path: "/add-employee",
    component: CreateEmployeeForm,
  },
  {
    path: "/employee/:id",
    component: EmployeeDetails,
  },
];

function App() {
  return (
    <div className="App">
      <NavBar />
      {routes.map((aRoute) => {
        return <Route path={aRoute.path} component={aRoute.component} exact={aRoute.exact} key={aRoute.path} />;
      })}
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import ViewEmployee from './components/ViewEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import './App.css';


function App() {
  return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/employee-list" component={EmployeeList} />
          <Route path="/add-employee" component={AddEmployee} />
          <Route path="/view-employee/:id" component={ViewEmployee} />
          <Route path="/update-employee/:id" component={UpdateEmployee} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
  );
}

export default App;

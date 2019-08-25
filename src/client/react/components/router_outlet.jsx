import React from "react";
import { Route } from "react-router-dom";

import Dashboard from "./dashboard/dashboard";
import TasksIndex from "./tasks/index/container.jsx";
import NewTaskContainer from './tasks/newTask/newTask'
function RouterOutlet({}) {
  return (
    <React.Fragment>
      <React.Fragment>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/tasks" component={TasksIndex} />
        <Route exact path='/newTask' component={NewTaskContainer}/>
      </React.Fragment>
    </React.Fragment>
  );
}

export default RouterOutlet;

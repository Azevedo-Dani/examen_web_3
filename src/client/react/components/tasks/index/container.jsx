import React from "react";
import Component from "./component.jsx"
import sendApiRequest from '../../../utils/api'
import service from '../../../services/tasks'
class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }
        this.deleteTask = this.deleteTask.bind(this)
    }

    getAllTasks() {
        service.retrieveAll().then(tasks => {
            this.setState({
                tasks: tasks
            })
        })
    }
    componentDidMount() {
        this.getAllTasks()
    }
    deleteTask(id) {
        service.destroy(id).then(resp => {
            this.getAllTasks()
        })
    }
    render(){
        return (
            <Component tasks = {this.state.tasks} deleteTask={this.deleteTask}/>
        )
    }
}

export default Container;
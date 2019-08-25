import React from 'react'
import NewTaskComponent from './newTaskComponent'
import sendApiRequest from '../../../utils/api'
import service from '../../../services/tasks'
class NewTaskContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ''
        }
        this.taskChange = this.taskChange.bind(this)
        this.addTask = this.addTask.bind(this)
    }

    taskChange(e) {
        if (e) {
            this.setState({
                task: e.target.value
            })
        }
    }

    addTask() {
        service.create({label: this.state.task})
        .then(resp => {
            console.log(resp)
            this.props.history.push('/tasks')
        })
    }

    render() {
        return (
            <NewTaskComponent task = {this.state.task} taskChange = {this.taskChange} addTask = {this.addTask}/>
        )
    }

}


export default NewTaskContainer
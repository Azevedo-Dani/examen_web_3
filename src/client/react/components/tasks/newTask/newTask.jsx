import React from 'react'
import { withRouter } from 'react-router-dom';
import NewTaskComponent from './newTaskComponent'
import sendApiRequest from '../../../utils/api'
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
        sendApiRequest({
            url: '/tasks',
            method: 'POST',
            params: {
                content: this.state.task
            }
        }).then(resp => {
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


export default withRouter(NewTaskContainer)
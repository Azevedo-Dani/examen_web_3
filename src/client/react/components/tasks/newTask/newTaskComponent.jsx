import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
const NewTaskComponent = ({
    task, taskChange, addTask
}) => {
    return (<Form.Group>
        <Row>
            <Col xs={8}>
                <Form.Control name ='text' placeholder ='new task' value = {task} onChange = {taskChange}>
                </Form.Control>
            </Col>
            <Col xs={4}>
                <Button onClick= {addTask}>Add</Button>
            </Col>
        </Row>
       
    </Form.Group>)
}

export default NewTaskComponent
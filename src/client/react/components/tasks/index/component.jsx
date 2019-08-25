import React from "react";
import {Container, Row, Col, ListGroup, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Component = ({
    tasks, deleteTask
})=>{
    return (
        <Container>
            <Row>
                <Col xs={8}>
                    <ListGroup>
                        {tasks.map((task) => (
                            <ListGroup.Item key ={task._id}>
                                <Row>
                                    <Col xs={8}>
                                        {task.content}
                                    </Col>
                                    <Col xs={4}>
                                        <Button onClick= {() => deleteTask(task._id)}> delete </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col xs={4}>
                    <Button as={Link} to='/newTask' > New task </Button>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Component;
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { taskDelete, taskUpdate } from '../api/task';
import { ITask } from '../App';
import { deleteTask, updateTask } from '../redux/task';

interface IProps {
    item: ITask;
}

const TaskComponent:React.FC<IProps> = ({ item }) => {
    const { _id ,content ,done } = item;
    const dispatch = useDispatch();

    const updateTaskHandler = async () => {
        const data = await taskUpdate(_id, content, done);

        dispatch(updateTask(data));
    }

    const deleteTaskHandler = async () => {
        const data = await taskDelete(_id);

        dispatch(deleteTask(_id));
    }

    return (
        <Row className='mt-2' >
            <Col xs={2}>
                <input type="checkbox" checked={done} onChange={updateTaskHandler}/>
            </Col>
            <Col xs={8}>
                <p>{content}</p>
            </Col>
            <Col xs={2}>
                <Button onClick={deleteTaskHandler}>X</Button>
            </Col>
        </Row>
    )
}

export default TaskComponent;
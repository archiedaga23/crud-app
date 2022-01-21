import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { taskAdd } from '../api/task';
import { addTask } from '../redux/task';

const InputComponent:React.FC = () => {
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState<string>('');

    const addTaskHandler = async () => {
        const payload = {
            _id: '',
            content: newTask,
            done: false
        }

        const data = await taskAdd(payload);
        dispatch(addTask(data));
        setNewTask('');
    }

    return (
        <Row>
            <Col xs={10}>
                <input  
                    type="text" 
                    className='w-100 p-2' 
                    placeholder='New Task' 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)}
                />
            </Col>
            <Col xs={2}>
                <Button onClick={addTaskHandler}>Add Task</Button>
            </Col>
        </Row>
    )  
}

export default InputComponent;
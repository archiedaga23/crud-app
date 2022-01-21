import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { ITask } from '../App';
import { RootStateOrAny } from 'react-redux';
import TaskComponent from './TaskComponent';

const TaskListComponent:React.FC = () => {
    const [lists, setLists] = useState<ITask[]>([]);
    const store = useStore();

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const state = store.getState();

            setLists(state.task);
        })
    }, [store])

    return (
        <Container className='mt-5'>
            {
                lists.map(item => <TaskComponent key={item._id} item={item} />)
            }
        </Container>
    )
}

export default TaskListComponent;
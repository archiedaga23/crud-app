import axios from 'axios';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchTasks } from './api/task';
import InputComponent from './components/InputComponent';
import TaskListComponent from './components/TaskListComponent';
import { addTask } from './redux/task';

export interface ITask {
  _id: string
  content: string
  done: boolean
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchedTasks = async () => {
      const data = await fetchTasks();

      data.forEach((task: ITask) => dispatch(addTask(task)));
    }
    
    fetchedTasks()
      .catch(err => console.log(err));
  }, [])

  return (
    <Container>
      <h1 className='text-center mt-5 mb-5'>Todo App</h1>
      <InputComponent />
      <TaskListComponent />
    </Container>
  );
}

export default App;

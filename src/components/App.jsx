import TaskForm from './Form/TaskForm';
import AppBar from './Navigate/AppBar';
import TaskList from './TaskList/TaskList';
import { Container, WrapFormTask } from './App.styled';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <WrapFormTask>
        <TaskForm />
        <TaskList />
      </WrapFormTask>
    </Container>
  );
};

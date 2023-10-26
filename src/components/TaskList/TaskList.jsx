import React from 'react';

import {
  BtnDelete,
  Checkbox,
  TextTask,
  WrapList,
  WrapTask,
} from './TaskList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { deleteTask, toggleCompleted } from 'redux/tasksSlice';
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function TaskList() {
  const dispatch = useDispatch();
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(state => state.tasks.tasks);
  console.log(tasks);
  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector(state => state.filters);
  console.log(filter);
  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const showStatusTasks = (tasks, filter) => {
    if (filter.statusFilters === 'active') {
      return tasks.filter(task => !task.completed);
    } else if (filter.statusFilters === 'ended') {
      return tasks.filter(task => task.completed);
    }
    return tasks;
  };
  const changeTasks = showStatusTasks(tasks, filter);
  const showArr = Array.isArray(tasks) && tasks.length;
  return (
    <WrapList>
      {showArr &&
        changeTasks.map(({ id, text, completed }) => (
          <WrapTask key={nanoid()} id={nanoid()}>
            <Checkbox
              type="checkbox"
              onChange={() => dispatch(toggleCompleted(id))}
              checked={completed}
              // id="checkbox"
              // name="checkbox"
              style={{
                borderRadius: 4,
                backgroundColor: 'gray',
              }}
            />
            <TextTask>{text}</TextTask>
            <BtnDelete onClick={() => dispatch(deleteTask(id))}>
              <BsFillTrash3Fill className="icon-delete" />
            </BtnDelete>
          </WrapTask>
        ))}
    </WrapList>
  );
}

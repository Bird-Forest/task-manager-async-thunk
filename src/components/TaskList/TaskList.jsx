import React, { useEffect } from 'react';
import {
  BtnDelete,
  Checkbox,
  TextTask,
  WrapList,
  WrapTask,
} from './TaskList.styled';
import {
  selectIsLoading,
  selectError,
  selectVisibleTasks,
} from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { toggleCompleted, deleteTask, fetchTasks } from 'redux/operations';

export default function TaskList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const newTasks = useSelector(selectVisibleTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const showArr = Array.isArray(newTasks) && newTasks.length;
  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <WrapList>
        {showArr &&
          newTasks.map(task => (
            <WrapTask key={nanoid()} id={nanoid()}>
              <Checkbox
                type="checkbox"
                onChange={() => dispatch(toggleCompleted(task))}
                checked={task.completed}
              />
              <TextTask>
                <p className="text">{task.title}</p>
              </TextTask>
              <BtnDelete onClick={() => dispatch(deleteTask(task.id))}>
                <BsFillTrash3Fill className="icon-delete" />
              </BtnDelete>
            </WrapTask>
          ))}
      </WrapList>
    </div>
  );
}

import React from 'react';
import { BsFillHandIndexThumbFill } from 'react-icons/bs';
import { BtnForm, FormTask, InputForm } from './TaskForm.styled';

// import { addTask } from '../../redux/tasksSlice';

// Імпортуємо генератор екшену

import { useDispatch } from 'react-redux';
import { addTask } from 'redux/operations';

export default function TaskForm() {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    // Викликаємо генератор екшену та передаємо текст завдання для поля payload
    // Відправляємо результат – екшен створення завдання
    dispatch(addTask(event.target.elements.text.value));
    console.log(event.target.elements.text.value);
    event.target.reset();
  };
  return (
    <FormTask onSubmit={handleSubmit}>
      <InputForm type="text" name="text" placeholder="Enter task text..." />
      <BtnForm type="submit">
        <BsFillHandIndexThumbFill className="icon-add" />
      </BtnForm>
    </FormTask>
  );
}

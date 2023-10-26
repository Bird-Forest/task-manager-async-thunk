import React from 'react';
import {
  Active,
  Completed,
  Counter,
  TitleCounter,
  WrapCounter,
} from './TaskConter.styled';
import { useSelector } from 'react-redux';
import { BsFillEmojiAngryFill, BsFillEmojiSmileFill } from 'react-icons/bs';

export const TaskCounter = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(state => state.tasks.tasks);
  // На базі стану Redux отримуємо похідні дані
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <WrapCounter>
      <TitleCounter>Tasks</TitleCounter>
      <Counter>
        <Active>
          <BsFillEmojiAngryFill className="icon-active" /> {count.active}
        </Active>
        <Completed>
          <BsFillEmojiSmileFill className="icon-completed" /> {count.completed}
        </Completed>
      </Counter>
    </WrapCounter>
  );
};

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
import { selectTaskCount } from 'redux/selectors';

export const TaskCounter = () => {
  const count = useSelector(selectTaskCount);

  return (
    <WrapCounter>
      <TitleCounter>Tasks</TitleCounter>
      <Counter>
        <Active>
          <BsFillEmojiAngryFill className="icon-active" />
          {count.active}
        </Active>
        <Completed>
          <BsFillEmojiSmileFill className="icon-completed" />
          {count.completed}
        </Completed>
      </Counter>
    </WrapCounter>
  );
};

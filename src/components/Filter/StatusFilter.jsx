import React from 'react';
import {
  WrapFilter,
  BtnAll,
  BtnActive,
  BtnCompleted,
  WrapBtn,
  TitleFilter,
} from './StatusFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
// Імпортуємо генератор екшену
import { setStatusFilter } from '../../redux/filtersSlice';
import {
  BsEmojiWinkFill,
  BsFillEmojiAngryFill,
  BsFillEmojiSmileFill,
} from 'react-icons/bs';

export default function StatusFilter() {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector(state => state.filters);
  console.log(filter);
  // Викликаємо генератор екшену onClick та передаємо значення фільтра

  return (
    <>
      <WrapFilter>
        <TitleFilter>Filter</TitleFilter>
        <WrapBtn>
          <BtnAll
            selected={filter.all}
            onClick={() => dispatch(setStatusFilter(filter.all))}
          >
            <BsEmojiWinkFill className="icon-btn-all " />
          </BtnAll>
          <BtnActive
            selected={filter.active}
            onClick={() => dispatch(setStatusFilter(filter.active))}
          >
            <BsFillEmojiAngryFill className="icon-btn-active" />
          </BtnActive>
          <BtnCompleted
            selected={filter.ended}
            onClick={() => dispatch(setStatusFilter(filter.ended))}
          >
            <BsFillEmojiSmileFill className="icon-btn-ended" />
          </BtnCompleted>
        </WrapBtn>
      </WrapFilter>
    </>
  );
}

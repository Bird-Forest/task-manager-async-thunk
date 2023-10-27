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

import {
  BsEmojiWinkFill,
  BsFillEmojiAngryFill,
  BsFillEmojiSmileFill,
} from 'react-icons/bs';

import { selectStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filtersSlice';
import { statusFilters } from 'redux/constans';

export default function StatusFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <>
      <WrapFilter>
        <TitleFilter>Filter</TitleFilter>
        <WrapBtn>
          <BtnAll
            selected={filter === statusFilters.all}
            onClick={() => handleFilterChange(statusFilters.all)}
          >
            <BsEmojiWinkFill className="icon-btn-all " />
          </BtnAll>
          <BtnActive
            selected={filter === statusFilters.active}
            onClick={() => handleFilterChange(statusFilters.active)}
          >
            <BsFillEmojiAngryFill className="icon-btn-active" />
          </BtnActive>
          <BtnCompleted
            selected={filter === statusFilters.completed}
            onClick={() => handleFilterChange(statusFilters.completed)}
          >
            <BsFillEmojiSmileFill className="icon-btn-ended" />
          </BtnCompleted>
        </WrapBtn>
      </WrapFilter>
    </>
  );
}

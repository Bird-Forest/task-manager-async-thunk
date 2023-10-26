import React from 'react';
import { TaskCounter } from '../Counter/TaskCounter';
import StatusFilter from '../Filter/StatusFilter';
import { TopNavigation } from '../../components/App.styled';
export default function AppBar() {
  return (
    <>
      <TopNavigation>
        <TaskCounter />
        <StatusFilter />
      </TopNavigation>
    </>
  );
}

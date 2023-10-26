import { createSlice } from '@reduxjs/toolkit';

const statusFilters = Object.freeze({
  all: 'all',
  active: 'active',
  ended: 'ended',
});
console.log(statusFilters);

const filtersSlice = createSlice({
  name: 'filters',
  initialState: statusFilters,
  reducers: {
    setStatusFilter: (state, action) => {
      state.statusFilters = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

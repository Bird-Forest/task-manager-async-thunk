// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { createStore } from 'redux';
// import { filtersReducer, tasksReducer } from './reducer';
// Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer);
import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const tasksConfig = {
  key: 'tasks',
  storage,
  whitelist: ['tasks'],
  //   blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    tasks: persistReducer(tasksConfig, tasksReducer),
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

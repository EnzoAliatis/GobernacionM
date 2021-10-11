import {configureStore} from '@reduxjs/toolkit';

import { apiSlice } from '../api/api';
import authReducer from './slices/authSlice';
import profileReducer from './slices/profileSlice';


const reducers = {
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  profile: profileReducer,
};

const buildStore = () => {
  const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({serializableCheck: false}).concat(apiSlice.middleware),
  });
  return store;
};

const store = buildStore();

export {buildStore};
export default store;

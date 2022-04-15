import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {jsonPlaceholderApi} from '../services/JsonPlaceholderApi';
import postsSlice from './reducers/postsSlice';

const rootReducer = combineReducers({
  [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  reducerCards: postsSlice,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware =>
      getDefaultMiddleware().concat(jsonPlaceholderApi.middleware))
  })
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<typeof rootReducer>

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {jsonPlaceholderApi} from '../services/JsonPlaceholderApi';

const rootReducer = combineReducers({
  [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
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

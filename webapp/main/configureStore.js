import { createStore, applyMiddleware } from 'redux'
import rootReducer from './Reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'


export default function configureStore(preloadedState) {
  const loggerMiddleware = createLogger()

  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    )
  );

  return store;
};

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { toggleReducer } from './reducer/toggleReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  isDarkMode: false,
};

const reducer = {
  isDarkMode: toggleReducer
}

const rootReducer = combineReducers(
  reducer,
  initialState,
);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware( thunk )
  )
);

export default store;

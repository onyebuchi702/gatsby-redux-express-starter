import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { toggleReducer } from './reducer/toggleReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  isDarkMode: false,
};

const reducer = combineReducers({
  isDarkMode: toggleReducer
})

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware( thunk )
  )
);

export default store;

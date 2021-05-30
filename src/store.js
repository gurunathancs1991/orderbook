import { createStore, applyMiddleware } from 'redux'
import BookReducer from './reducer'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(BookReducer, composeWithDevTools(applyMiddleware(thunk)));
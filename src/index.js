import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultsReducer
});
// middleware logs each action
const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware Dispatching] ', action);
      const result = next(action); // let the action continue to reducer
      console.log('[Middleware Next State] ', store.getState());
      return result;
    }
  }
}

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

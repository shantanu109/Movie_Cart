import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import movies from './reducers';
import rootReducer from './reducers'

//this object will contain two properties, one getState property and the other dispatch property
//Both of these are the same functions we have in store
//curried form of function logger
//function logger(obj, next, action)
//logger(obj)(next)(action)
const logger = function ({dispatch,getState}) {

  return function(next) {
    return function (action) {
      //middleware code
      console.log('ACTION_TYPE = ', action.type);
      next(action);
    }
  }

}


//This createStore function will internally call my reducer to get the initial state

const store = createStore(rootReducer,applyMiddleware(logger));
console.log('store',store)
//console.log('BEFORE STATE',store.getState());


// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// });

//console.log('AFTER STATE',store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);


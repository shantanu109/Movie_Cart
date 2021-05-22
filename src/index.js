import React from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import movies from './reducers';
import rootReducer from './reducers'
import thunk from 'redux-thunk';

//this object will contain two properties, one getState property and the other dispatch property
//Both of these are the same functions we have in store
//curried form of function logger
//function logger(obj, next, action)
//logger(obj)(next)(action)
// const logger = function ({dispatch,getState}) {

//   return function(next) {
//     return function (action) {
//       //middleware code
//       console.log('ACTION_TYPE = ', action.type);
//       next(action);
//     }
//   }

// }

const logger = ({dispatch,getState}) => (next) => (action) => {
  //logger code
  if (typeof action !== 'function'){
    console.log('ACTION_TYPE = ', action.type);
  }
  next(action);

}

// const thunk = ({dispatch,getState}) => (next) => (action) => {
//   //logger code
//   if (typeof action === 'function'){
//     //call that function
//     action(dispatch);
//     return;
//   }
//   next(action);

// }


//This createStore function will internally call my reducer to get the initial state

const store = createStore(rootReducer,applyMiddleware(logger,thunk));
console.log('store',store)
//console.log('BEFORE STATE',store.getState());

// export const StoreContext = createContext();

// console.log('StoreContext',StoreContext);

// class Provider extends React.Component {
//   render(){
//     const {store}  = this.props;
//     return <StoreContext.Provider value={store}>
//       {/*Means it will render App component*/}
//       {this.props.children}
//     </StoreContext.Provider>;
     
//   }
// }

//const connectedAppComponent = connect(callback)(App)
// export function connect (callback) {
//   return  function (Component){
//     class ConnectedComponent extends React.Component{
//       constructor (props){
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());

//       }
//       componentWillUnmount(){
//         this.unsubscribe();
//       }
//       render (){
        
//           const {store} = this.props
//             //We are rendering whichever Component is being passed
//           const state = store.getState();
//           const dataToBePassedAsProps = callback(state);

//           return <Component {...dataToBePassedAsProps} dispatch={store.dispatch} />      
        
//       }
//     }
  
    
//     class ConnectedComponentWrapper extends React.Component {
//       render(){
//         return (
//           <StoreContext.Consumer>
//           {store => <ConnectedComponent store={store}/>}
//           </StoreContext.Consumer>
//         );
//       }

//     }
//     return ConnectedComponentWrapper;

//   }
// }

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// });

//console.log('AFTER STATE',store.getState());


ReactDOM.render(
  //Pass my store to each and every descendent of App
  <Provider store={store}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


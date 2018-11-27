import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux-modules/index';
import LayoutRoot from './components/layout/LayoutRoot';
import { sampleMiddleware } from './sampleMiddleware';
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, sampleMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
console.log('test');
ReactDOM.render(
  <Provider store={store}>
    <LayoutRoot />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

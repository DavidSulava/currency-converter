import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React    from 'react';
import ReactDOM from 'react-dom';

import App from './App';


import { Provider }  from 'react-redux'
import thunk         from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'

// ---[ Reducers ]---
import rootReducer  from './store/reducers/rootReducer';

const store = createStore( rootReducer,  compose( applyMiddleware(thunk) ) );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >, document.getElementById('root')
);



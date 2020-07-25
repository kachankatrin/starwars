
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import { Provider } from 'react-redux';
import { store } from './store/index';

const history = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
    ,
  document.getElementById('root')
);

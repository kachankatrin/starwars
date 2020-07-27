
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import { Provider } from 'react-redux';
import { store } from './store/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
      <Router history={history} basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </Provider>
    ,
  document.getElementById('root')
);
// import React from 'react';
// import ReactDOM from 'react-dom';
// // import "bootstrap/dist/css/bootstrap.min.css";
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


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
// store.subscribe(() => {
//   const favoriteJokes = store.getState().favoritesState.favoriteJokes
//   saveStateToLocalStorage(favoriteJokes);
// })
ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
    ,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

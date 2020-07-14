import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './containers/TodoList/TodoList';
import * as serviceWorker from './serviceWorker';


import reducer from './store/reducers/TodoList';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

const app = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)


ReactDOM.render(app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

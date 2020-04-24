import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'; // importing Provider to wrap the App component in
import { createStore } from 'redux'; // importing creeateStore to create a store object

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

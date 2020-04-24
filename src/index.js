import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'; // importing Provider to wrap the App component in
import { createStore } from 'redux'; // importing creeateStore to create a store object
import reducer from './reducers/reducer'; // importing the reducer to be the parameter for the createStore function


import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import InterestCalculator from './components/interest-calculator';
import './index.css';
import store from './store'
import {Provider} from 'react-redux'


ReactDOM.render(
    <Provider store={store}>
    <InterestCalculator />
    </Provider>,
    document.getElementById('root')
);

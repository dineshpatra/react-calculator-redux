import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './assets/sass/index.scss';
import CalculatorApp from './components/CalculatorApp/CalculatorApp';
import { RootReducer } from './reducers/RootReducer';

const store = createStore(RootReducer);
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
          <CalculatorApp />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { LOGIN_SUCCESS } from './actions/index';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// create custom middleware to save 'userToken' to local storage on LOGIN_SUCCESS
const customMiddlewareToSaveUserToke = (store) => (next) => (action) => {
	console.log('STOREEEE ',store);
	if (action.type === LOGIN_SUCCESS) {
      console.log('alabalasa')

		localStorage.setItem('userToken', action.payload);
	}
	next(action);
};

const store = createStore(
	rootReducer,
	{},
	compose(
		applyMiddleware(thunk, customMiddlewareToSaveUserToke),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

//const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

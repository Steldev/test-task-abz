import React from 'react';

// === STORE AND MIDDLEWARE ======================
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import '@babel/polyfill'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootReducer from './store/reducer';
import rootSaga from './store/saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, logger)));

sagaMiddleware.run(rootSaga);
// ===============================================

import Page from "./components/Page";

function App() {
    return <Provider store={store}>
       <Page />
    </Provider>;
}

export default App;
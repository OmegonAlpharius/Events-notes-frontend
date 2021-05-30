import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createMiddleware from 'redux-saga';
import usersReducer from './reducers/usersReducer';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';
import { rootSaga } from './sagas/index';

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  users: usersReducer,
  router: connectRouter(history),
});

const sagaMiddleware = createMiddleware();

const middleware = [routerMiddleware(history), sagaMiddleware];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, enhancers);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  saveToLocalStorage({
    users: {
      user: store.getState().users.user,
    },
  });
});

export default store;

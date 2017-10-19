import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { State } from "./containers/App/appReducer";
import appReducer from "./containers/App/appReducer";
import { fetchUsersSaga } from "./containers/App/appSagas";

export type RootState = {
  users: State;
};

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers<RootState>({
   users: appReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchUsersSaga);
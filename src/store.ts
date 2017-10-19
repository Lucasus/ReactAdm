import { combineReducers } from "redux";
import { createStore } from "redux";
import { State } from "./containers/App/appReducer";
import appReducer from "./containers/App/appReducer";

export type RootState = {
  users: State;
};

const rootReducer = combineReducers<RootState>({
   users: appReducer
});

export const store = createStore(rootReducer);

import { combineReducers } from "redux";
import { createStore } from "redux";
import { State } from "./reducers/usersReducer";
import usersReducer from "./reducers/usersReducer";

export type RootState = {
  users: State;
};

const rootReducer = combineReducers<RootState>({
   users: usersReducer
});

export const store = createStore(rootReducer);

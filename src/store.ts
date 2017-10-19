import { combineReducers } from "redux";
import { createStore } from "redux";
import { State } from "./containers/UsersPage/usersPageReducer";
import usersReducer from "./containers/UsersPage/usersPageReducer";

export type RootState = {
  users: State;
};

const rootReducer = combineReducers<RootState>({
   users: usersReducer
});

export const store = createStore(rootReducer);

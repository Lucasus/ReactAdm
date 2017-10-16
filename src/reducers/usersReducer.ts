import { combineReducers } from 'redux';

import {
  ADD_USER
} from '../actions/usersActions';

export type State = Readonly<{
  users: string[],
}>;

export const initialState: State = {
  users: [
    "user 1",
    "user 2",
    "user 3"
  ],
}; 

const reducer = combineReducers<State>({
  users: (state: State = initialState, action) => {
    switch (action.type) {
      case ADD_USER:
        return {
           users: [
             ...state.users,
             action.userName
           ]           
        };

      default:
        return state;
    }
  },
});

export default reducer;
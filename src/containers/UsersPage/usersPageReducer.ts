import { UserPageAction } from "./usersPageActions";
import { ADD_USER } from "./usersPageActions";

export type State = string[];

const initialState: State = [
  "user 1",
  "user 2",
  "user 3"
];

const reducer = (state: State = initialState, action: UserPageAction) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [
          ...state,
          action.userName
        ]
      };

    default:
      return state;
  }
};

export default reducer;
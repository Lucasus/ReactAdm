import { UserModel } from "../../model/userModel";
import { UserPageAction } from "./usersPageActions";
import {
  ADD_USER,
  REQUEST_USERS,
  REQUEST_USERS_SUCCEEDED
} from "./usersPageActions";

export type State = UserModel[];

const initialState: State = [
   { id: 0, username: "sth", fullname: "sth sth"}
];

const reducer = (state: State = initialState, action: UserPageAction): State => {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state, {
          id: 0,
          username: action.username,
          fullname: action.fullname
        }
      ];

    case REQUEST_USERS:
      return state;

    case REQUEST_USERS_SUCCEEDED:
      return [
        ...action.users
      ]

    default:
      return state;
  }
};

export default reducer;
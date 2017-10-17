export const ADD_USER = "ADD_USER";

export type Actions = {
  ADD_USER: {
    userName: string,
    type: typeof ADD_USER,
  }
};

export const actionCreators = {
  addUser: (userName: string): Actions[typeof ADD_USER] => ({
    userName,
    type: ADD_USER,
  })
};

export type RootAction =
  Actions[keyof Actions];

export type State = string[];

export const initialState: State = [
  "user 1",
  "user 2",
  "user 3"
];

const reducer = (state: State = initialState, action: RootAction) => {
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
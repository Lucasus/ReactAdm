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
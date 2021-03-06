import UserModel from "../../model/userModel";

import {
  ADD_USER,
  REQUEST_USERS,
  REQUEST_USERS_SUCCEEDED
} from "./consts";

export type Actions = {
  ADD_USER: {
    username: string,
    fullname: string,
    type: typeof ADD_USER,
  },
  REQUEST_USERS: {
    type: typeof REQUEST_USERS
  },
  REQUEST_USERS_SUCCEEDED: {
    users: UserModel[],
    type: typeof REQUEST_USERS_SUCCEEDED
  }
};

export const addUser = (username: string, fullname: string): Actions[typeof ADD_USER] => ({
  type: ADD_USER,
  username,
  fullname,
});

export const requestUsers = (): Actions[typeof REQUEST_USERS] => ({
  type: REQUEST_USERS,
});

export const requestUsersSucceeded = (users: UserModel[]): Actions[typeof REQUEST_USERS_SUCCEEDED] => ({
  type: REQUEST_USERS_SUCCEEDED,
  users: users,
});

export type UserPageAction =
  Actions[keyof Actions];

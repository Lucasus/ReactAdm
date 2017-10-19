import { takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";
import UserModel from "../../model/userModel";
import { REQUEST_USERS } from "./consts";
import { requestUsersSucceeded } from "./appActions";

export function fetchUsersFromServer() {
   return fetch("http://localhost:3004/users")
     .then<UserModel[]>(response => response.json());
}

export function* fetchUsers() {
  const users = yield call(fetchUsersFromServer);
  yield put(requestUsersSucceeded(users));
}

export function* fetchUsersSaga() {
  yield takeLatest(REQUEST_USERS, fetchUsers);
}
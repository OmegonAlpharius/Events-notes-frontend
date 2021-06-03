import axios from '../../axios-api';
import { push } from 'connected-react-router';
import { put } from 'redux-saga/effects';
import { NotificationManager } from 'react-notifications';
import {
  createUserSuccess,
  createUserFailure,
  loginUserSuccess,
  loginUserFailure,
  logoutUserSuccess,
  fetchGetUsersSuccess,
  subscribeUsersSuccess,
  unsubscribeUsersSuccess,
  unsubscribeUsersFailure,
  subscribeUsersFailure,
  getSubscribersSuccess,
  getSubscribersFailure,
} from '../actions/usersActions';

export function* registerUserSaga({ userData }) {
  try {
    console.log('registerUserSaga');
    yield axios.post('/users', userData);
    yield put(createUserSuccess());
    yield put(push('/'));
    yield NotificationManager.success(
      'Register successful',
      'Success message',
      5000
    );
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(createUserFailure(e.response.data));
    } else {
      yield put(createUserFailure(e));
    }
  }
}

export function* loginUserSaga({ userData }) {
  try {
    const response = yield axios.post('/users/sessions', userData);
    yield put(loginUserSuccess(response.data));
    yield put(push('/'));
    yield NotificationManager.success('Login success');
  } catch (e) {
    yield put(loginUserFailure(e.response.data));
  }
}

export function* logoutUserSaga() {
  try {
    yield axios.delete('/users/sessions');
    yield put(logoutUserSuccess());
    yield put(push('/'));
    yield NotificationManager.success('Logout success');
  } catch (e) {
    yield NotificationManager.error('Logout failure');
  }
}

export function* getUsersSaga() {
  try {
    const response = yield axios.get('/users');

    yield put(fetchGetUsersSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* subscribeUserSaga({ payload }) {
  try {
    const response = yield axios.post(`/users/subscribe?id=${payload}`);
    yield NotificationManager.success('Subscribe success');
    yield put(subscribeUsersSuccess(response.data));
  } catch (e) {
    console.log(e);
    yield put(subscribeUsersFailure(e));
    yield NotificationManager.error('Subscribe failure');
  }
}
export function* unsubscribeUserSaga({ payload }) {
  try {
    const response = yield axios.delete(`/users/subscribe?id=${payload}`);
    yield NotificationManager.success('Unsubscribe success');
    yield put(unsubscribeUsersSuccess(response.data));
  } catch (e) {
    console.log(e);
    yield put(unsubscribeUsersFailure(e));
    yield NotificationManager.error('Unsubscribe failure');
  }
}

export function* getSubscribersSaga() {
  try {
    const response = yield axios.get('/users/subscribers');

    yield put(getSubscribersSuccess(response.data));
  } catch (e) {
    yield put(getSubscribersFailure(e));
    console.log(e);
  }
}

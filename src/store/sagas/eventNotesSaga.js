import { push } from 'connected-react-router';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import { put } from 'redux-saga/effects';
import axios from '../../axios-api';
import {
  createRequestFailure,
  createRequestSuccess,
  fetchGetRequestFailure,
  fetchGetRequestSuccess,
} from '../actions/eventNotesActions';

export function* createNoteSaga({ payload }) {
  try {
    console.log('createNoteSaga');
    yield axios.post('/events', payload);
    yield put(createRequestSuccess());
    yield put(push('/'));
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(createRequestFailure(e.response.data));
    } else {
      yield put(createRequestFailure(e));
    }
  }
}
export function* getNotesSaga() {
  try {
    console.log('createNoteSaga');
    const response = yield axios.get('/events');
    yield put(fetchGetRequestSuccess(response.data));
  } catch (e) {
    yield put(fetchGetRequestFailure(e));
    console.log(e.response);
    yield NotificationManager.error(e.message);
  }
}

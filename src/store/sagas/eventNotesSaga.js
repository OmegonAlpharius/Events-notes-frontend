import { push } from 'connected-react-router';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import { put } from 'redux-saga/effects';
import axios from '../../axios-api';
import {
  createRequestFailure,
  createRequestSuccess,
  deleteRequestFailure,
  deleteRequestSuccess,
  fetchGetRequestFailure,
  fetchGetRequestSuccess,
  GetNotes,
} from '../actions/eventNotesActions';

export function* createNoteSaga({ payload }) {
  try {
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
    const response = yield axios.get('/events');
    yield put(fetchGetRequestSuccess(response.data));
  } catch (e) {
    yield put(fetchGetRequestFailure(e));
    console.log(e.response);
    yield NotificationManager.error(e.message);
  }
}
export function* deleteNotesSaga({ payload }) {
  try {
    const response = yield axios.delete(`/events?id=${payload}`);
    yield put(deleteRequestSuccess(response.data));
    yield put(GetNotes());
  } catch (e) {
    yield put(deleteRequestFailure(e));
    console.log(e.response);
    yield NotificationManager.error(e.message);
  }
}

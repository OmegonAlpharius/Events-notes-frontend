import axios from '../../axios-api';
import { push } from 'connected-react-router';
import { put } from 'redux-saga/effects';

import {
  createRequestFailure,
  createRequestSuccess,
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

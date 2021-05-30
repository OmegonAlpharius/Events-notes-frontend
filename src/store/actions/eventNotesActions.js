import {
  CREATE_EVENT_FAILURE,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE,
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  GET_EVENTS_FAILURE,
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
} from '../actionTypes';

export const GetNotes = () => {
  return { type: GET_EVENTS_REQUEST };
};

export const fetchGetRequestFailure = (payload) => {
  return { type: GET_EVENTS_FAILURE, payload };
};

export const fetchGetRequestSuccess = (payload) => {
  return { type: GET_EVENTS_SUCCESS, payload };
};

export const createNote = (payload) => {
  return { type: CREATE_EVENT_REQUEST, payload };
};

export const createRequestFailure = (payload) => {
  return { type: CREATE_EVENT_FAILURE, payload };
};

export const createRequestSuccess = () => {
  return { type: CREATE_EVENT_SUCCESS };
};

export const fetchDeleteRequest = (payload) => {
  return { type: DELETE_EVENT_REQUEST, payload };
};

export const deleteRequestFailure = (payload) => {
  return { type: DELETE_EVENT_FAILURE };
};

export const deleteRequestSuccess = () => {
  return { type: DELETE_EVENT_SUCCESS };
};

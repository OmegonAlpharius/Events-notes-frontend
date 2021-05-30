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

const initialState = {
  eventNotes: [],
  loading: false,
  error: null,
  createError: null,
};
const eventNotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_REQUEST:
      return { ...state, loading: true };
    case GET_EVENTS_SUCCESS:
      return { ...state, eventNotes: action.payload, loading: false };

    case GET_EVENTS_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case CREATE_EVENT_REQUEST:
      return { ...state, loading: true };
    case CREATE_EVENT_SUCCESS:
      return { ...state, loading: false, createError: null };
    case CREATE_EVENT_FAILURE:
      return { ...state, createError: action.payload, loading: false };
    case DELETE_EVENT_REQUEST:
      return { ...state, loading: true };
    case DELETE_EVENT_SUCCESS:
      return { ...state, loading: false, error: null };
    case DELETE_EVENT_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default eventNotesReducer;

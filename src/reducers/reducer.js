import {
  CHANGE_COMIC_PRELOAD,
  CHANGE_COMIC_BEGIN,
  CHANGE_COMIC_SUCCESS,
  CHANGE_COMIC_FAILURE,
} from "../actions/actions"

const defaultState = {
  comic: {},
  loading: false,
  loadingMessage: false,
  error: null,
}

export default function mainReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_COMIC_PRELOAD:
      return {
        ...state,
        loading: false,
        loadingMessage: true,
        error: null,
      }

    case CHANGE_COMIC_BEGIN:
      return {
        ...state,
        loading: true,
        loadingMessage: false,
        error: null,
      }

    case CHANGE_COMIC_SUCCESS:
      return {
        ...state,
        loading: false,
        loadingMessage: false,
        comic: action.payload.comic,
      }

    case CHANGE_COMIC_FAILURE:
      return {
        ...state,
        loading: false,
        loadingMessage: false,
        error: action.payload.error,
        comic: {},
      }

    default:
      return state
  }
}

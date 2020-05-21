import axios from "axios"

export const CHANGE_COMIC_PRELOAD = "CHANGE_COMIC_PRELOAD"
export const CHANGE_COMIC_BEGIN = "CHANGE_COMIC_BEGIN"
export const CHANGE_COMIC_SUCCESS = "CHANGE_COMIC_SUCCESS"
export const CHANGE_COMIC_FAILURE = "CHANGE_COMIC_FAILURE"

export const fetchComicPreload = () => ({
  type: CHANGE_COMIC_PRELOAD,
})
export const fetchComicBegin = () => ({
  type: CHANGE_COMIC_BEGIN,
})

export const fetchComicSuccess = (comic) => ({
  type: CHANGE_COMIC_SUCCESS,
  payload: { comic },
})

export const fetchComicFailure = (error) => ({
  type: CHANGE_COMIC_FAILURE,
  payload: { error },
})

export function comicPreLoad() {
  return (dispatch) => {
    dispatch(fetchComicPreload())
  }
}

export function loadComic(comicNumber) {
  const fetchUrl =
    comicNumber > 0
      ? `http://xkcd.com/${comicNumber}/info.0.json`
      : "http://xkcd.com/info.0.json"
  return (dispatch) => {
    dispatch(fetchComicBegin())
    return axios
      .get(fetchUrl)
      .then(({ data }) => {
        dispatch(fetchComicSuccess(data))
        return data
      })
      .catch((error) => dispatch(fetchComicFailure(error)))
  }
}

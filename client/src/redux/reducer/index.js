import {
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_NAME,
  GET_VIDEOGAME_GENRES,
  GET_VIDEOGAME_ID,
} from "../action/";

const initialState = {
  videogames: [],
  videogame_id: [],
  videogames_name: [],
  videogame_genres: [],
};

export const videogame_reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_VIDEOGAME_ID:
      return {
        ...state,
        videogame_id: action.payload,
      };
    case GET_VIDEOGAME_GENRES:
      return {
        ...state,
        videogame_genres: action.payload,
      };
    case GET_VIDEOGAMES_NAME:
      return {
        ...state,
        videogames_name: action.payload,
      };
    default:
      return state;
  }
};

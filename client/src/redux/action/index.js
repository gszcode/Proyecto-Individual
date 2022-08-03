import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAME_ID = "GET_VIDEOGAME_ID";
export const GET_VIDEOGAMES_NAME = "GET_VIDEOGAME_NAME";
export const GET_VIDEOGAME_GENRES = "GET_VIDEOGAME_GENRES";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_RATING = "FILTER_RATING";
export const FILTER_ALPHABETIC = "FILTER_ALPHABETIC";
export const CREATED_EXISTING = "CREATED_EXISTING";

// obtener todos los video juegos
export const get_videogames = () => {
  return async (dispatch) => {
    await fetch(`http://localhost:3001/videogames`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_VIDEOGAMES,
          payload: data,
        });
      });
  };
};

// obtener juego por id
export const get_videogames_id = (id) => {
  return async (dispatch) => {
    await fetch(`http://localhost:3001/videogames/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_VIDEOGAME_ID,
          payload: data,
        });
      });
  };
};

// obtener generos
export const get_videogame_genres = () => {
  return async (dispatch) => {
    await fetch(`http://localhost:3001/genres`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_VIDEOGAME_GENRES,
          payload: data,
        });
      });
  };
};

// obtener juegos por nombre
export const get_videogames_name = (name) => {
  return async (dispatch) => {
    await fetch(`http://localhost:3001/videogames?search=${name}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_VIDEOGAMES_NAME,
          payload: data,
        });
      });
  };
};

// crear un juego
export const post_create_videogame = (game) => {
  return async (dispatch) => {
    const res = await axios.post(`http://localhost:3001/videogames`, game);
    return dispatch({ type: CREATE_VIDEOGAME, payload: res.data });
  };
};

// filtrado por genero
export const filter_by_genre = (genre) => {
  return {
    type: FILTER_BY_GENRE,
    payload: genre,
  };
};

// filtrado por puntuacion
export const filter_rating = (rating) => {
  return {
    type: FILTER_RATING,
    payload: rating,
  };
};

// filtrado albafetico
export const filter_alphabetic = (name) => {
  return {
    type: FILTER_ALPHABETIC,
    payload: name,
  };
};

// filtrado por creado o existente
export const created_existing = (value) => {
  return {
    type: CREATED_EXISTING,
    payload: value,
  };
};

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAME_ID = "GET_VIDEOGAME_ID";
export const GET_VIDEOGAMES_NAME = "GET_VIDEOGAME_NAME";
export const GET_VIDEOGAME_GENRES = "GET_VIDEOGAME_GENRES";

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

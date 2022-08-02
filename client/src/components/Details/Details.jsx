import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_videogames_id } from "../../redux/action";
import { FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./Details.css";

const Details = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.videogame_id);

  useEffect(() => {
    dispatch(get_videogames_id(id));
  }, [dispatch, id]);

  return (
    <>
      {state ? (
        <section className="section__details">
          <Link className="section_details__back" to="/videogames">
            <FaBackward />
          </Link>
          <h2 className="details__title">{state.name}</h2>
          <article className="article__details">
            <div>
              <div className="article__details__image">
                <img src={state.image} alt={state.name} />
              </div>
              <div className="article__details__info">
                <div className="article__details__date">
                  <p>
                    Released:
                    <span> {state.released} </span>
                  </p>
                  <p>
                    Rating:
                    <span> {state.rating} </span>
                  </p>
                </div>
                <div className="article__details__text">
                  <p>Platforms: {`${state.platforms}`} </p>
                  <p>Genres: {`${state.genres}`} </p>
                </div>
              </div>
            </div>
            <div className="article__details__desc">
              <h3>Description: </h3>
              <p>{state.description}</p>
            </div>
          </article>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Details;

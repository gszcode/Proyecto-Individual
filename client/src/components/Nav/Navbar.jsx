import { Link } from "react-router-dom";
import { useEffect } from "react";
import logo from "../../img/logo.webp";
import Search from "../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import {
  filter_alphabetic,
  filter_by_genre,
  filter_rating,
  get_videogame_genres,
} from "../../redux/action";

const Navbar = () => {
  const dispatch = useDispatch();
  const { videogame_genres, videogames } = useSelector((state) => state);

  useEffect(() => {
    dispatch(get_videogame_genres());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(videogames());
  };

  const handleGenres = (e) => {
    dispatch(filter_by_genre(e.target.value));
  };

  const handleRating = (e) => {
    dispatch(filter_rating(e.target.value));
  };

  const handleAlphabetic = (e) => {
    dispatch(filter_alphabetic(e.target.value));
  };

  return (
    <>
      <nav className="nav">
        <div className="nav__logo">
          <Link onClick={handleClick} to="/videogames">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <section className="nav__filter">
          <Search />

          <Link className="nav__link" to="/videogame/create">
            Create Videogame
          </Link>

          <select
            onChange={handleAlphabetic}
            className="nav__select__alphabetical"
            name="alphabetical"
          >
            <option>Alphabetical Order:</option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>

          <select onChange={handleRating} className="nav__select__rating">
            <option>Rating Orden:</option>
            <option value="asc">Ascendant</option>
            <option value="desc">Descendant</option>
          </select>

          <select onChange={handleGenres} className="nav__select__genre">
            <option value="All">Filter by Genre:</option>
            {videogame_genres.map((genre) => (
              <option value={genre} key={genre}>
                {genre}
              </option>
            ))}
          </select>
        </section>
      </nav>
    </>
  );
};

export default Navbar;

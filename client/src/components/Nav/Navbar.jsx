import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../img/logo.webp";
import Search from "../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { get_videogame_genres } from "../../redux/action";

const Navbar = () => {
  const [icon, setIcon] = useState(true);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.videogame_genres);

  useEffect(() => {
    dispatch(get_videogame_genres());
  }, [dispatch]);

  const handleClick = (e) => {
    setIcon(icon ? false : true);
  };

  return (
    <>
      <button onClick={handleClick} className="nav__icon__menu">
        <FaBars />
      </button>

      <nav className={`${icon ? "nav" : "nav__hide"}`}>
        <div className="nav__logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <section className="nav__filter">
          <Search />

          <Link className="nav__link" to="/videogames/create">
            Create Videogame
          </Link>

          <select className="nav__select__alphabetical" name="" id="">
            <option value="">Alphabetical Order:</option>
            <option value="">A - Z</option>
            <option value="">Z - A</option>
          </select>

          <select className="nav__select__rating" name="" id="">
            <option value="">Rating Orden:</option>
            <option value="">Ascendant</option>
            <option value="">Descendant</option>
          </select>

          <select className="nav__select__genre" name="" id="">
            <option value="">Filter by Genre:</option>
            {state.map((genre) => (
              <option key={genre}>{genre}</option>
            ))}
          </select>
        </section>
      </nav>
    </>
  );
};

export default Navbar;

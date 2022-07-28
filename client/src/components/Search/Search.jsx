import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { get_videogames_name } from "../../redux/action";
import "./Search.css";

const Search = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.videogames_name);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  console.log(state);

  const handleClick = (e) => {
    dispatch(get_videogames_name(name));
  };

  return (
    <div className="div__search">
      <input
        onChange={handleChange}
        type="text"
        className="nav__input__search"
        placeholder="Search"
        value={name}
      />
      <button onClick={handleClick} className="div__search__btn" type="submit">
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;

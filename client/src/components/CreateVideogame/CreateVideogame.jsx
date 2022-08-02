import { useEffect, useState } from "react";
import { FaBackward } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  get_videogame_genres,
  post_create_videogame,
} from "../../redux/action";
import "./CreateVideogame.css";

const initialState = {
  name: "",
  description: "",
  released: "",
  image: "",
  rating: 0,
  platforms: [],
  genres: [],
};

const platforms = [
  "Linux",
  "PC",
  "Xbox One",
  "PlayStation 4",
  "Xbox 360",
  "PlayStation 3",
  "macOS",
  "Nintendo Switch",
  "Xbox Series S/X",
  "PlayStation 5",
  "Wii U",
  "Nintendo 3DS",
  "iOS",
  "PS Vite",
  "Android",
  "Xbox",
  "PlayStation 2",
  "Dreamcast",
  "Web",
];

const CreateVideogame = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { videogame_genres } = useSelector((state) => state);
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(get_videogame_genres());
  }, [dispatch]);

  const validate = (input) => {
    let errors = {};

    if (!input.name.length) errors.name = "Name required";
    if (!input.platforms.length) errors.platforms = "Platforms required";
    if (!input.description.length) errors.description = "Description required";

    return errors;
  };

  const handleDelete = (el) => {
    setForm({
      ...form,
      genres: form.genres.filter((genre) => genre !== el),
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(post_create_videogame(form));

    alert("Game created!");
    navigate("/videogames");
  };

  const handleSelect = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.name === "genres"
          ? [...form.genres, e.target.value]
          : [...form.platforms, e.target.value],
    });

    setErrors(
      validate({
        ...form,
        [e.target.name]:
          e.target.name === "genres"
            ? [...form.genres, e.target.value]
            : [...form.platforms, e.target.value],
      })
    );
  };

  return (
    <section className="section__form">
      {/* titulo */}
      <h1 className="section__form__title">Create Game</h1>
      <Link className="section_form__back" to="/videogames">
        <FaBackward />
      </Link>

      {/* formulario */}
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        {/* input nombre */}
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error__text">{errors.name}</p>}

        {/* input fecha */}
        <input
          type="date"
          name="released"
          value={form.released}
          onChange={handleChange}
        />

        {/* input imagen */}
        <input
          type="text"
          placeholder="URL image"
          name="image"
          value={form.image}
          onChange={handleChange}
        />

        {/* input genrero */}
        <select name="genres" onChange={handleSelect}>
          <option>Genres</option>
          {videogame_genres.map((genre) => (
            <option key={genre} value={genre} onChange={handleChange}>
              {genre}
            </option>
          ))}
        </select>
        <div className="div__btn__delete">
          {form.genres.map((el) => (
            <div key={el} className="div__delete">
              <p>{el}</p>
              <button className="btn__delete" onClick={() => handleDelete(el)}>
                X
              </button>
            </div>
          ))}
        </div>

        {/* input plataforma */}
        <select name="platforms" onChange={handleSelect}>
          <option>Platforms</option>
          {platforms.map((p) => (
            <option key={p} value={p} onChange={handleChange}>
              {p}
            </option>
          ))}
        </select>
        {errors.platforms && <p className="error__text">{errors.platforms}</p>}
        {/* <div className="div__btn__delete">
          {form.platforms.map((el) => (
            <div key={el} className="div__delete">
              <p>{el}</p>
              <button className="btn__delete" onClick={() => handleDelete(el)}>
                X
              </button>
            </div>
          ))}
        </div> */}

        {/* input puntuacion */}
        <h4 className="input__platforms__title">Rating</h4>
        <input
          type="number"
          placeholder="Rating"
          name="rating"
          value={form.rating}
          onChange={handleChange}
        />

        {/* input descripcion */}
        <textarea
          placeholder="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
        ></textarea>
        {errors.description && (
          <p className="error__text">{errors.description}</p>
        )}

        <button className="form__btn">Send</button>
      </form>
    </section>
  );
};

export default CreateVideogame;

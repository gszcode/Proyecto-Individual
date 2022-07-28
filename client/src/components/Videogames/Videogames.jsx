import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_videogames } from "../../redux/action";
import Navbar from "../Nav/Navbar";
import Videogame from "../Videogame/Videogame";
import "./Videogames.css";

const Videogames = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch(get_videogames());
  }, [dispatch]);

  return (
    <div className="div__container">
      <Navbar />
      <section className="section__videogames">
        {state.length ? (
          state.map((game) => <Videogame key={game.id} game={game} />)
        ) : (
          <h1>Loading...</h1>
        )}
      </section>
    </div>
  );
};

export default Videogames;

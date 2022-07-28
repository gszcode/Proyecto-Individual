import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <main className="main">
      <Link to="/videogames" className="main__btn">
        Start Play
      </Link>
    </main>
  );
};

export default Landing;

import { Route, Routes } from "react-router-dom";
import CreateVideogame from "./components/CreateVideogame/CreateVideogame";
import Details from "./components/Details/Details";
import Landing from "./components/Landing/Landing";
import NotFound from "./components/NotFound/NotFound";
import Videogames from "./components/Videogames/Videogames";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/videogames" element={<Videogames />} />
        <Route path="/videogame/:id" element={<Details />} />
        <Route path="/videogame/create" element={<CreateVideogame />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

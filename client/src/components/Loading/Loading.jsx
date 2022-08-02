import { FaSpinner } from "react-icons/fa";
import "./Loading.css";

function Spinner() {
  return (
    <div className="spinner">
      <FaSpinner className="spinning" size={60} />
    </div>
  );
}

export default Spinner;

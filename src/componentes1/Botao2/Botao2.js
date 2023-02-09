import './Botao2.css'
import { Link } from "react-router-dom";

const Botao2 = (props) => {
  return (
    <Link to={props.path}>
      <button to={"./Pagina"} className="botao">
        {props.children}
      </button>
    </Link>
  );
};

export default Botao2;

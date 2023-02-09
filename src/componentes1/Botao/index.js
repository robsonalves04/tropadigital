import './Botao.css';
import { Link } from "react-router-dom";

const Botao = (props) =>  {
    return (
    <Link to={props.path}>
    <button to={'./?'} className='botao2'>
        {props.children}
    </button> 
    </Link>
    )
}

export default Botao
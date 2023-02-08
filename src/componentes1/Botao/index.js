import './Botao.css';

const Botao = (props) =>  {
    return (<button to={'./Pagina'} className='botao'>
        {props.children}
    </button> )
}

export default Botao
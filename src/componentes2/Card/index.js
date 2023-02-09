import './Card.css'

const Card = (props) => {
  return (
    
      <img src='./Imagens/Imagens/image7.png' className="card" alt='Cards'>
        {props.children}
      </img>   
  )
}

export default Card;

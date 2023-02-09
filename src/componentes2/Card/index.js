import './Card.css'

const Card = (props) => {
  return (
    <div className="card">    
      <img src='./Imagens/Imagens/image7.png' alt='Cards'>
        {props.children}
      </img>   
      <h1 className='sub1'>Lorem Ipsum is simply dummy text of the printing and typesettin...</h1>
      <h2 className='sub2'>Lorem Ipsum is simply dummy text of the printing and typesettin...</h2>
    </div>
  )
}

export default Card;

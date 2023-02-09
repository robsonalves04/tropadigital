import Botao2 from "../Botao2/Botao2"

import Login from "../Login"
import './Home.css'

const Home = () =>{
    return(
        <body className="body">


    <div className='divpai'>

        <section className='login'>
            
            <img className='logo' src="Imagens/Imagens/logo.png" alt="Logo Tropa Digital"/>      
            <form>            
            <h2 className='titulo'>Bem Vindo ao <span>Painel</span></h2>  
                <div className='label'>
                    <Login  placeholder="Digite seu e-mail"/>
                    <Login  placeholder="Digite sua senha"/>
                </div>                 
            <Botao2 path="/Pagina" className="botao">
                Acessar
            </Botao2>
            </form>
        </section>
            <div className='bk2'>
                <span className='bk1'></span>                     
                            </div>
            <div>
                <img className='bk' src='/Imagens/Imagens/computer.png' alt='imagem computador'/>
            </div>   
                        
    </div>
        
    </body>
    )
}

export default Home
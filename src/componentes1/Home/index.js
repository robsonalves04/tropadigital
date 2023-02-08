import Login from "../Login"
import './Home.css'

const Home = () =>{
    return(

    <div className='divpai'>

        <section className='login'>
            
            <img className='logo' src="Imagens/Imagens/logo.png" alt="Logo Tropa Digital"/>      
            <form>            
            <h2 className='titulo'>Bem Vindo ao <span>Painel</span></h2>  
                <div className='label'>
                    <Login label placeholder="Digite seu e-mail"/>
                    <Login label placeholder="Digite sua senha"/>
                </div>                 
            </form>
        </section>
            <div className='bk2'>
                <span className='bk1'></span>                     
                            </div>
            <div>
                <img className='bk' src='/Imagens/Imagens/computer.png' alt='imagem computador'/>
            </div>               
    </div>
        
    )
}

export default Home
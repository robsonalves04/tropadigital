
import Botao from '../../componentes1/Botao'
import Card from '../Card'
import './Pagina.css'

const Pagina = () =>{
    return(
        <main>
            <section className='body1'>
                <header>
                    <h1 className='texto'>
                        Olá <span className='span'>Usuario</span>
                    </h1>
                    <img className='logo2' src='./Imagens/Imagens/logo.png'alt='Logo'/>
                </header>
             
                    <div>
                        <Botao path="/?" className="">
                            Inicio                                     
                        </Botao>
                        <Botao className="">
                            Contatos                                     
                        </Botao>
                        <Botao className="">
                            Relatorios                                     
                        </Botao>
                        <Botao className="">
                            Contatos                                     
                        </Botao>
                        <Botao className="">
                            Contatos                                    
                        </Botao>
                        <Botao className="">
                            Contatos                                     
                        </Botao>
                    </div>
                    </section>
                <section className='card'>
                        <div>
                            <Card/>       
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                </section>        
        </main>
    )
}

export default Pagina
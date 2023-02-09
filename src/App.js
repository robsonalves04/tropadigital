import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componentes1/Home';
import Pagina from './componentes2/Pagina'


function App() {
  return (   
    <div className='App'>

    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Pagina" element={<Pagina/>}/>
      </Routes>  
    </BrowserRouter>
    </div> 
    
  )  
}

export default App;

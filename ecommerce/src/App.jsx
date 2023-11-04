import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login'/>
      <Route path='/categorias'/>
      <Route path='/contato'/>
      <Route path='/carrinho'/>
      <Route path='/:jogo'/>
    </Routes>
    </>
  )
}

export default App

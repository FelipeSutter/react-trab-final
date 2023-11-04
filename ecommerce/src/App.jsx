import {Route, Routes} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path='/'/>
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

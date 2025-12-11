
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Prodotti from "./pages/Prodotti"
import Info from "./pages/ChiSiamo"
import DefaultLayout from "./Layout/DefaultLayout"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DettagliProdotto from './pages/DettagliProdotto'
import NoFound from "./pages/NoFound.jsx"
import { BudgetContext } from './Context/BudgetContext.jsx'

function App() {

  return (
    <>
     <BudgetContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/Chisiamo' element={<Info />} />
            <Route path='/prodotti' element={<Prodotti />} />
            <Route path='/prodotti/:id' element={<DettagliProdotto/>} /> {/* Creo La route dinamica che poi preleverò con useParams in dettagli prodotto  */}
            <Route path='*' element={<NoFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </BudgetContext.Provider>
    </>
  )
}

export default App

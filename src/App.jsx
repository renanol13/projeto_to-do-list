import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import NavBar from "./Componentes/NavBar"
import Conteiner from "./Componentes/Conteiner"
import Tasks from "./Paginas/Tasks"
import Graphic from "./Paginas/Graphic"

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Conteiner>
          <Routes>
            <Route exact path="/" element={<Tasks />} />
            <Route path="/graphic" element={<Graphic/>} />
          </Routes>
        </Conteiner>
      </Router>
    </>
  )
}

export default App

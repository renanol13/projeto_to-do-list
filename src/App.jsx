import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from "react"

import NavBar from "./Componentes/NavBar"
import Conteiner from "./Componentes/Conteiner"
import Tasks from "./Paginas/Tasks"
import Grafic from "./Paginas/Grafic"

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Conteiner>
          <Routes>
            <Route path="/" element={<Tasks/>} />
            <Route path="/graphic" element={<Grafic/>} />
          </Routes>
        </Conteiner>
      </Router>
    </>
  )
}

export default App

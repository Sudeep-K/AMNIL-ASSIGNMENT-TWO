import { useReducer, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'
import NavBar from './components/NavBar'
import { AppProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <>
      <AppProvider>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </AppProvider>
    </>
  )
}

export default App

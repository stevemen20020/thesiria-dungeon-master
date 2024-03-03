import './App.css'
import Map from './pages/map/Map'
import Players from './pages/players/Players'
import Nav from './shared/components/layout/nav/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Map/>}></Route>
          <Route path="/map" element={<Map/>}></Route>
          <Route path="/players" element={<Players/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

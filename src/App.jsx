import './App.css'
import Diary from './pages/diary/Diary'
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
          <Route path="/diary" element={<Diary/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

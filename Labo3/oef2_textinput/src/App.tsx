import { Route, Routes } from 'react-router'
import MainLayout from './layout/MainLayout'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import './App.css'
function App() {

  return (
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          </Route>
      </Routes>
  )
}

export default App

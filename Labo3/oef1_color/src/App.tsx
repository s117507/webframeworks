import { Route, Routes } from "react-router"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Color from "./pages/Color"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="color" element={<Color />}/>
            <Route path="contact" element={<Contact />}/>
        </Route>
    </Routes>
  )
}


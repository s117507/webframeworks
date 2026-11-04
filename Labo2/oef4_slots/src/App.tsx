import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Slots from "./pages/Slots";

export default function App() {
  return(
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="slots" element={<Slots />}></Route>
      </Route>
    </Routes>
  )
}
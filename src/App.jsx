import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"
import AddCar from "./components/AddCar"
import ViewCar from "./components/ViewCar"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/addcars" element={<AddCar/>}/>
      <Route path="/viewcars" element={<ViewCar/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
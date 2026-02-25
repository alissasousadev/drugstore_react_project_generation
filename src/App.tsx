import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home/Home";
import ListaCategoria from "./components/categoria/listaCategoria/ListaCategoria";
import FormCategoria from "./components/categoria/formCategoria/FormCategoria";
import DeletarCategoria from "./components/categoria/deleteCategoria/DeleteCategoria";

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <div className="min-h-[80vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categorias" element={<ListaCategoria />} />
        <Route path="/cadastrarcategoria" element={<FormCategoria />} />
        <Route path="/editarcategoria/:id" element={<FormCategoria />} />
        <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
      </Routes>
    </div>
    <Footer />
    </BrowserRouter>
     </>
  )
}

export default App

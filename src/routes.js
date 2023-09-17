import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio"
import SobreMim from "./paginas/sobremim";
import Menu from "./componentes/menu";
import Rodape from "./componentes/Rodape";

function AppRoutes() {
  return  (
  <BrowserRouter>
  <Menu />
  <Routes>
    <Route path ="/" element={<Inicio />}/>
    <Route path="/sobremim" element={<SobreMim />} />
    <Route path="*" element={<div>Pagina inexistente</div>}/>

  </Routes>


  <Rodape />
  </BrowserRouter>
  );
}

export default AppRoutes;

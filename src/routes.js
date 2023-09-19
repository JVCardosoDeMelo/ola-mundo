import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio"
import SobreMim from "./paginas/sobremim";
import Menu from "./componentes/menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/post";

function AppRoutes() {
  return  (
  <BrowserRouter>
  <Menu />
  <Routes>
    <Route path="/" element={<PaginaPadrao />}>
      <Route index element={<Inicio />}/>
      <Route path="sobremim" element={<SobreMim />} />
      <Route path="posts/:id" element={<Post />} />
    </Route>
    <Route path="*" element={<div>Pagina inexistente</div>}/>

  </Routes>


  <Rodape />
  </BrowserRouter>
  );
}

export default AppRoutes;

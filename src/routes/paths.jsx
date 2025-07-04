import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Imoveis from "../pages/Imoveis";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import EsqueciSenha from "../pages/EsqueciSenha";
import CadastrarImovel from "../pages/CadastrarImovel";
import Favoritos from "../pages/Favoritos"; // manter só essa
import MeuPerfil from "../pages/MeuPerfil";
import Configuracoes from "../pages/Configuracoes";

import PageLayout from "../Layouts/PageLayout";
import AuthLayout from "../Layouts/AuthLayout";
import PrivateRoute from "./PrivateRoute";

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="imoveis" element={<Imoveis />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="esqueci-senha" element={<EsqueciSenha />} />
          <Route
            path="cadastrar-imovel"
            element={
              <PrivateRoute>
                <CadastrarImovel />
              </PrivateRoute>
            }
          />
          <Route
            path="meu-perfil"
            element={
              <PrivateRoute>
                <MeuPerfil />
              </PrivateRoute>
            }
          />
          <Route
            path="favoritos"
            element={
              <PrivateRoute>
                <Favoritos />
              </PrivateRoute>
            }
          />
          <Route
            path="configuracoes"
            element={
              <PrivateRoute>
                <Configuracoes />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/auth" element={<AuthLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;

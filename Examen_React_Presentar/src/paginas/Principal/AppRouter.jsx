import { Rutas } from "./Rutas";
import LoginForm from "../LoginForm/LoginForm";
import ErrorPagina from "../Error/ErrorPagina";
import ErrorUsuarioPassword from "../Error/ErrorUsuarioPassword";
import RecuperarCuenta from "../Error/RecuperarCuenta";
import Home from "../Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={Rutas.AppRouter} element={<LoginForm />} />

        <Route path={Rutas.Home} element={<Home />} />

        <Route path={Rutas.RecuperarCuenta} element={<RecuperarCuenta />} />
        <Route path={Rutas.ErrorPagina} element={<ErrorPagina />} />
        <Route
          path={Rutas.ErrorUsuarioPassword}
          element={<ErrorUsuarioPassword />}
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;

import estilos from "./LoginForm.module.css";
import { Fragment } from "react";
import LoginForm_Logica from "./LoginForm_Logica";
import { Rutas } from "../Principal/Rutas";

export default function LoginForm() {
  const { username, setUsername, password, setPassword, handleSubmit } =
    LoginForm_Logica();

  return (
    <Fragment>
      <div className={estilos.base}>
        <section className={estilos.sectionuno}>
          <h1>INTR@NETFLIX</h1>
        </section>

        <section className={estilos.sectiondos}>
          <form className={estilos.form} onSubmit={handleSubmit}>
            {/*} <label className={estilos.label}>Usuario: </label>*/}
            <p>
              <input
                name="usuario"
                id="usuario"
                className={estilos.usuario}
                maxLength="20"
                minLength="4"
                type="text"
                placeholder="Usuario..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </p>
            {/*<label className={estilos.label}>Contraseña:</label> */}
            <p>
              <input
                name="password"
                id="password"
                placeholder="Contraseña..."
                className={estilos.password}
                type="password"
                maxLength="20"
                minLength="4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </p>

            <div className={estilos.divbuttons}>
              <button className={estilos.button} type="submit">
                INGRESAR
              </button>
              <button
                name="borrar"
                className={estilos.button}
                onClick={() => {
                  setUsername("");
                  setPassword("");
                }}
              >
                BORRAR
              </button>
            </div>
            <p className={estilos.aviso}>
              ¿Olvidaste tu contraseña?{" "}
              <a href={Rutas.RecuperarCuenta}>Recuperarla</a>
            </p>
          </form>
        </section>
      </div>
    </Fragment>
  );
}

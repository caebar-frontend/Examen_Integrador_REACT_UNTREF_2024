import { Fragment } from "react";
import Home_Logica_General from "./Home_Logica_General";
import estilos from "./Home.module.css";
import LogoutButton from "./Logica_Segmentada/LogoutButton";
import Footer from "./Footer/Footer";

export default function Home() {
  const {
    trailersaccion,
    handleTraileraccionClick,
    trailerscienciaficcion,
    handleTrailercienciaficcionClick,
    trailersaventura,
    handleTraileraventuraClick,
    username,
    email,
    trailersdrama,
    handleTrailerdramaClick,
    trailersfamilia,
    handleTrailerfamiliaClick,
    trailersfantasia,
    handleTrailerfantasiaClick,
    trailerssucesoreal,
    handleTrailersucesorealClick,
    trailerssuspenso,
    handleTrailersuspensoClick,
    trailersterror,
    handleTrailerterrorClick,
  } = Home_Logica_General();
  const { handleLogout } = LogoutButton();

  return (
    <Fragment>
      <body className={estilos.body}>
        <header className={estilos.headuno}>
          <div className={estilos.headunodiv}>
            <h1>INTR@NETFLIX</h1>
          </div>
          <div className={estilos.headunodiv}>
            {username && email ? (
              <div className={estilos.headunodivsegundo}>
                <h4 className={estilos.headunoh4}>Bienvenido, {username}!</h4>
                <h4 className={estilos.headunoh4}>e-mail: {email}</h4>
                <button
                  onClick={handleLogout}
                  className={estilos.cerrarsesionbutton}
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <p>Cargando información...</p>
            )}
          </div>
        </header>
        <section className={estilos.sectionnav}>
          <nav>
            <li>
              <a href="#accion">Acción</a>
            </li>
            <li>
              <a href="#aventura">Aventura</a>
            </li>
            <li>
              <a href="#cienciaficcion">Ciencia Ficción</a>
            </li>
            <li>
              <a href="#drama">Drama</a>
            </li>
            <li>
              <a href="#familia">Familia</a>
            </li>
            <li>
              <a href="#fantasia">Fantasia</a>
            </li>
            <li>
              <a href="#sucesoreal">Suceso Real</a>
            </li>
            <li>
              <a href="#suspenso">Suspenso</a>
            </li>
            <li>
              <a href="#terror">Terror</a>
            </li>
          </nav>
        </section>
        <header className={estilos.headdos}>
          <h2>Películas Recomendadas</h2>
        </header>

        <section className={estilos.seccionestodas}>
          <h2 id="accion">Acción</h2>

          <div>
            {trailersaccion.map((trailer, id) => (
              <article key={id} className={estilos.articles}>
                <h4 className={estilos.articlesh4}>{trailer.titulo}</h4>
                <img src={trailer.poster} className={estilos.articlesimg} />
                <p className={estilos.articlesp}>
                  -Resumen-<br></br>
                  {trailer.resumen}
                </p>
                <p className={estilos.articlesp}>
                  -Actores-<br></br>
                  {trailer.reparto}
                </p>
                <button
                  className={estilos.articlesbutton}
                  onClick={() => handleTraileraccionClick(trailer.trailer)}
                >
                  VER TRAILER
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className={estilos.seccionestodas}>
          <h2 id="aventura">Aventura</h2>

          <div>
            {trailersaventura.map((trailer, id) => (
              <article key={id} className={estilos.articles}>
                <h4 className={estilos.articlesh4}>{trailer.titulo}</h4>
                <img className={estilos.articlesimg} src={trailer.poster} />
                <p className={estilos.articlesp}>
                  -Resumen-<br></br>
                  {trailer.resumen}
                </p>
                <p className={estilos.articlesp}>
                  -Actores-<br></br>
                  {trailer.reparto}
                </p>
                <button
                  className={estilos.articlesbutton}
                  onClick={() => handleTraileraventuraClick(trailer.trailer)}
                >
                  VER TRAILER
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className={estilos.seccionestodas}>
          <h2 id="cienciaficcion">Ciencia Ficción</h2>

          <div>
            {trailerscienciaficcion.map((trailer, id) => (
              <article key={id} className={estilos.articles}>
                <h4 className={estilos.articlesh4}>{trailer.titulo}</h4>
                <img className={estilos.articlesimg} src={trailer.poster} />
                <p className={estilos.articlesp}>
                  -Resumen-<br></br>
                  {trailer.resumen}
                </p>
                <p className={estilos.articlesp}>
                  -Actores-<br></br>
                  {trailer.reparto}
                </p>
                <button
                  className={estilos.articlesbutton}
                  onClick={() =>
                    handleTrailercienciaficcionClick(trailer.trailer)
                  }
                >
                  VER TRAILER
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className={estilos.seccionestodas}>
          <h2 id="drama">Drama</h2>

          <div>
            {trailersdrama.map((trailer, id) => (
              <article key={id} className={estilos.articles}>
                <h4 className={estilos.articlesh4}>{trailer.titulo}</h4>
                <img className={estilos.articlesimg} src={trailer.poster} />
                <p className={estilos.articlesp}>
                  -Resumen-<br></br>
                  {trailer.resumen}
                </p>
                <p className={estilos.articlesp}>
                  -Actores-<br></br>
                  {trailer.reparto}
                </p>
                <button
                  className={estilos.articlesbutton}
                  onClick={() => handleTrailerdramaClick(trailer.trailer)}
                >
                  VER TRAILER
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className={estilos.seccionestodas}>
          <h2 id="familia">Familia</h2>

          <div>
            {trailersfamilia.map((trailer, id) => (
              <article key={id} className={estilos.articles}>
                <h4 className={estilos.articlesh4}>{trailer.titulo}</h4>
                <img src={trailer.poster} className={estilos.articlesimg} />
                <p className={estilos.articlesp}>
                  -Resumen-<br></br>
                  {trailer.resumen}
                </p>
                <p className={estilos.articlesp}>
                  -Actores-<br></br>
                  {trailer.reparto}
                </p>
                <button
                  className={estilos.articlesbutton}
                  onClick={() => handleTrailerfamiliaClick(trailer.trailer)}
                >
                  VER TRAILER
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className={estilos.seccionestodas}>
          <h2 id="fantasia">Fantasía</h2>

          <div>
            {trailersfantasia.map((trailer, id) => (
              <article key={id} className={estilos.articles}>
                <h4 className={estilos.articlesh4}>{trailer.titulo}</h4>
                <img className={estilos.articlesimg} src={trailer.poster} />
                <p className={estilos.articlesp}>
                  -Resumen-<br></br>
                  {trailer.resumen}
                </p>
                <p className={estilos.articlesp}>
                  -Actores-<br></br>
                  {trailer.reparto}
                </p>
                <button
                  className={estilos.articlesbutton}
                  onClick={() => handleTrailerfantasiaClick(trailer.trailer)}
                >
                  VER TRAILER
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className={estilos.seccionestodas}>
          <h2 id="sucesoreal">Suceso Real</h2>

          <div>
            {trailerssucesoreal.map((trailer, id) => (
              <article key={id} className={estilos.articles}>
                <h4 className={estilos.articlesh4}>{trailer.titulo}</h4>
                <img className={estilos.articlesimg} src={trailer.poster} />
                <p className={estilos.articlesp}>
                  -Resumen-<br></br>
                  {trailer.resumen}
                </p>
                <p className={estilos.articlesp}>
                  -Actores-<br></br>
                  {trailer.reparto}
                </p>
                <button
                  className={estilos.articlesbutton}
                  onClick={() => handleTrailersucesorealClick(trailer.trailer)}
                >
                  VER TRAILER
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className={estilos.seccionestodas}>
          <h2 id="suspenso">Suspenso</h2>

          <div>
            {trailerssuspenso.map((trailer, id) => (
              <article key={id} className={estilos.articles}>
                <h4 className={estilos.articlesh4}>{trailer.titulo}</h4>
                <img className={estilos.articlesimg} src={trailer.poster} />
                <p className={estilos.articlesp}>
                  -Resumen-<br></br>
                  {trailer.resumen}
                </p>
                <p className={estilos.articlesp}>
                  -Actores-<br></br>
                  {trailer.reparto}
                </p>
                <button
                  className={estilos.articlesbutton}
                  onClick={() => handleTrailersuspensoClick(trailer.trailer)}
                >
                  VER TRAILER
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className={estilos.seccionestodas}>
          <h2 id="terror">Terror</h2>

          <div>
            {trailersterror.map((trailer, id) => (
              <article key={id} className={estilos.articles}>
                <h4 className={estilos.articlesh4}>{trailer.titulo}</h4>
                <img className={estilos.articlesimg} src={trailer.poster} />
                <p className={estilos.articlesp}>
                  -Resumen-<br></br>
                  {trailer.resumen}
                </p>
                <p className={estilos.articlesp}>
                  -Actores-<br></br>
                  {trailer.reparto}
                </p>
                <button
                  className={estilos.articlesbutton}
                  onClick={() => handleTrailerterrorClick(trailer.trailer)}
                >
                  VER TRAILER
                </button>
              </article>
            ))}
          </div>
        </section>
        <Footer />
      </body>
    </Fragment>
  );
}

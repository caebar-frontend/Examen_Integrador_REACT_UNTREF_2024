import estilos from "./Error.module.css";
import { Fragment } from "react";
import Error_Logica from "./Error_Logica";

export default function Error() {
  const { handleBack } = Error_Logica();

  return (
    <Fragment>
      <div className={estilos.base}>
        <section className={estilos.sectionuno}>
          <h1>INTR@NETFLIX</h1>
        </section>

        <section className={estilos.sectiondos}>
          <h1 className={estilos.h1secundario}>¡Página No Encontrada!</h1>
          <h2>Verifique la dirección ingresada, y vuelva a intentar...</h2>
          <br></br>
          <button onClick={handleBack}>Regresar</button>
        </section>
      </div>
    </Fragment>
  );
}

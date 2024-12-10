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
          <h1 className={estilos.h1secundario}>Recuperación de Cuenta</h1>
          <h2>
            Servicio momentaneamente no habilitado por causas ajenas a la
            empresa, estamos trabajando para poner nuevamente en funcionamiento
            la sección.<br></br>
            ¡Muchas gracias por elegirnos en el Streaming!.
          </h2>
          <br></br>
          <br></br>
          <button onClick={handleBack}>Regresar</button>
        </section>
      </div>
    </Fragment>
  );
}

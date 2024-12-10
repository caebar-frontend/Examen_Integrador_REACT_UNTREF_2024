import estilos from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={estilos.footer}>
      <section className={estilos.footerseccionuno}>
        <h3>Licencia General y Libre #2024</h3>
        <h3>Desarrollado por: @caebar</h3>
        <h3>Zárate, Bs. As., Argentina.</h3>
        <h3>54-3487-667679</h3>
      </section>
      <section className={estilos.footersecciondos}>
        <div className={estilos.footerseccdivs}>
          <h1>INTR@NETFLIX</h1>
        </div>
      </section>
    </footer>
  );
}

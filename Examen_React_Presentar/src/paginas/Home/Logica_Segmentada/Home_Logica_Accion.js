import { useEffect, useState } from "react";
import trailersData from "/src/trailers_bd/trailers.json"; // Asegúrate de que la ruta al archivo es correcta

export default function Home_Logica_Accion() {
  const [trailersaccion, setTrailersaccion] = useState([]);

  useEffect(() => {
    // Filtra los trailers de "ciencia ficción"
    const accionTrailers = trailersData.filter(
      (trailer) => trailer.gen === "Acción"
    );

    // Selecciona al azar 5 trailers
    const shuffled = accionTrailers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    setTrailersaccion(selected);
  }, []);

  const handleTraileraccionClick = (trailerUrl) => {
    window.open(`${trailerUrl}`, "_blank");
  };

  return { trailersaccion, handleTraileraccionClick };
}

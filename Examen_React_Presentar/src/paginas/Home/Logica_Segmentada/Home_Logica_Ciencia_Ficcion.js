import { useEffect, useState } from "react";
import trailersData from "/src/trailers_bd/trailers.json"; // Asegúrate de que la ruta al archivo es correcta

export default function Home_Logica_Ciencia_Ficcion() {
  const [trailerscienciaficcion, setTrailerscienciaficcion] = useState([]);

  useEffect(() => {
    // Filtra los trailers de "ciencia ficción"
    const cienciaFiccionTrailers = trailersData.filter(
      (trailer) => trailer.gen === "Ciencia Ficción"
    );

    // Selecciona al azar 5 trailers
    const shuffled = cienciaFiccionTrailers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    setTrailerscienciaficcion(selected);
  }, []);

  const handleTrailercienciaficcionClick = (trailerUrl) => {
    window.open(`${trailerUrl}`, "_blank");
  };

  return { trailerscienciaficcion, handleTrailercienciaficcionClick };
}

import { useEffect, useState } from "react";
import trailersData from "/src/trailers_bd/trailers.json"; // Asegúrate de que la ruta al archivo es correcta

export default function Home_Logica_Suspenso() {
  const [trailerssuspenso, setTrailerssuspenso] = useState([]);

  useEffect(() => {
    const suspensoTrailers = trailersData.filter(
      (trailer) => trailer.gen === "Suspenso"
    );

    // Selecciona al azar 5 trailers
    const shuffled = suspensoTrailers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    setTrailerssuspenso(selected);
  }, []);

  const handleTrailersuspensoClick = (trailerUrl) => {
    window.open(`${trailerUrl}`, "_blank");
  };

  return { trailerssuspenso, handleTrailersuspensoClick };
}

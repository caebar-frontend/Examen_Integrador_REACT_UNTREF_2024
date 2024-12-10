import { useEffect, useState } from "react";
import trailersData from "/src/trailers_bd/trailers.json"; // Asegúrate de que la ruta al archivo es correcta

export default function Home_Logica_Drama() {
  const [trailersdrama, setTrailersdrama] = useState([]);

  useEffect(() => {
    const dramaTrailers = trailersData.filter(
      (trailer) => trailer.gen === "Drama"
    );

    // Selecciona al azar 5 trailers
    const shuffled = dramaTrailers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    setTrailersdrama(selected);
  }, []);

  const handleTrailerdramaClick = (trailerUrl) => {
    window.open(`${trailerUrl}`, "_blank");
  };

  return { trailersdrama, handleTrailerdramaClick };
}

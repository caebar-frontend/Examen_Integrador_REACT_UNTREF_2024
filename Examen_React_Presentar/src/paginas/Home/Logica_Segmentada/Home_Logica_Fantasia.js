import { useEffect, useState } from "react";
import trailersData from "/src/trailers_bd/trailers.json"; // Asegúrate de que la ruta al archivo es correcta

export default function Home_Logica_Fantasia() {
  const [trailersfantasia, setTrailersfantasia] = useState([]);

  useEffect(() => {
    const fantasiaTrailers = trailersData.filter(
      (trailer) => trailer.gen === "Fantasía"
    );

    // Selecciona al azar 5 trailers
    const shuffled = fantasiaTrailers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    setTrailersfantasia(selected);
  }, []);

  const handleTrailerfantasiaClick = (trailerUrl) => {
    window.open(`${trailerUrl}`, "_blank");
  };

  return { trailersfantasia, handleTrailerfantasiaClick };
}

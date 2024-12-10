import { useEffect, useState } from "react";
import trailersData from "/src/trailers_bd/trailers.json"; // Asegúrate de que la ruta al archivo es correcta

export default function Home_Logica_Familia() {
  const [trailersfamilia, setTrailersfamilia] = useState([]);

  useEffect(() => {
    const familiaTrailers = trailersData.filter(
      (trailer) => trailer.gen === "Familia"
    );

    // Selecciona al azar 5 trailers
    const shuffled = familiaTrailers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    setTrailersfamilia(selected);
  }, []);

  const handleTrailerfamiliaClick = (trailerUrl) => {
    window.open(`${trailerUrl}`, "_blank");
  };

  return { trailersfamilia, handleTrailerfamiliaClick };
}

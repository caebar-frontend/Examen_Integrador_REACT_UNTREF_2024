import { useEffect, useState } from "react";
import trailersData from "/src/trailers_bd/trailers.json"; // Asegúrate de que la ruta al archivo es correcta

export default function Home_Logica_Terror() {
  const [trailersterror, setTrailersterror] = useState([]);

  useEffect(() => {
    const terrorTrailers = trailersData.filter(
      (trailer) => trailer.gen === "Terror"
    );

    // Selecciona al azar 5 trailers
    const shuffled = terrorTrailers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    setTrailersterror(selected);
  }, []);

  const handleTrailerterrorClick = (trailerUrl) => {
    window.open(`${trailerUrl}`, "_blank");
  };

  return { trailersterror, handleTrailerterrorClick };
}

import { useEffect, useState } from "react";
import trailersData from "/src/trailers_bd/trailers.json"; // Asegúrate de que la ruta al archivo es correcta

export default function Home_Logica_Aventura() {
  const [trailersaventura, setTrailersaventura] = useState([]);

  useEffect(() => {
    // Filtra los trailers de "ciencia ficción"
    const aventuraTrailers = trailersData.filter(
      (trailer) => trailer.gen === "Aventura"
    );

    // Selecciona al azar 5 trailers
    const shuffled = aventuraTrailers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    setTrailersaventura(selected);
  }, []);

  const handleTraileraventuraClick = (trailerUrl) => {
    window.open(`${trailerUrl}`, "_blank");
  };

  return { trailersaventura, handleTraileraventuraClick };
}

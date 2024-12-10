import { useEffect, useState } from "react";
import trailersData from "/src/trailers_bd/trailers.json"; // Asegúrate de que la ruta al archivo es correcta

export default function Home_Logica_SucesoReal() {
  const [trailerssucesoreal, setTrailerssucesoreal] = useState([]);

  useEffect(() => {
    const sucesorealTrailers = trailersData.filter(
      (trailer) => trailer.gen === "Suceso Real"
    );

    // Selecciona al azar 5 trailers
    const shuffled = sucesorealTrailers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    setTrailerssucesoreal(selected);
  }, []);

  const handleTrailersucesorealClick = (trailerUrl) => {
    window.open(`${trailerUrl}`, "_blank");
  };

  return { trailerssucesoreal, handleTrailersucesorealClick };
}

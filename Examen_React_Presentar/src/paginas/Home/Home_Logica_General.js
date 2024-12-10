import Home_Logica from "./Logica_Segmentada/Home_Logica";
import Home_Logica_Ciencia_Ficcion from "./Logica_Segmentada/Home_Logica_Ciencia_Ficcion";
import Home_Logica_Accion from "./Logica_Segmentada/Home_Logica_Accion";
import Home_Logica_Aventura from "./Logica_Segmentada/Home_Logica_Aventura";
import Home_Logica_Drama from "./Logica_Segmentada/Home_Logica_Drama";
import Home_Logica_familia from "./Logica_Segmentada/Home_Logica_Familia";
import Home_Logica_Fantasia from "./Logica_Segmentada/Home_Logica_Fantasia";
import Home_Logica_SucesoReal from "./Logica_Segmentada/Home_Logica_SucesoReal";
import Home_Logica_Suspenso from "./Logica_Segmentada/Home_Logica_Suspenso";
import Home_Logica_Terror from "./Logica_Segmentada/Home_Logica_Terror";

export default function Home_Logica_General() {
  const { trailersaccion, handleTraileraccionClick } = Home_Logica_Accion();
  const { trailerscienciaficcion, handleTrailercienciaficcionClick } =
    Home_Logica_Ciencia_Ficcion();
  const { trailersaventura, handleTraileraventuraClick } =
    Home_Logica_Aventura();
  const { username, email } = Home_Logica();
  const { trailersdrama, handleTrailerdramaClick } = Home_Logica_Drama();
  const { trailersfamilia, handleTrailerfamiliaClick } = Home_Logica_familia();
  const { trailersfantasia, handleTrailerfantasiaClick } =
    Home_Logica_Fantasia();
  const { trailerssucesoreal, handleTrailersucesorealClick } =
    Home_Logica_SucesoReal();
  const { trailerssuspenso, handleTrailersuspensoClick } =
    Home_Logica_Suspenso();
  const { trailersterror, handleTrailerterrorClick } = Home_Logica_Terror();

  return {
    trailersaccion,
    handleTraileraccionClick,
    trailerscienciaficcion,
    handleTrailercienciaficcionClick,
    trailersaventura,
    handleTraileraventuraClick,
    username,
    email,
    trailersdrama,
    handleTrailerdramaClick,
    trailersfamilia,
    handleTrailerfamiliaClick,
    trailersfantasia,
    handleTrailerfantasiaClick,
    trailerssucesoreal,
    handleTrailersucesorealClick,
    trailerssuspenso,
    handleTrailersuspensoClick,
    trailersterror,
    handleTrailerterrorClick,
  };
}

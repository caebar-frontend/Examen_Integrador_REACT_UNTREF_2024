import { useNavigate } from "react-router-dom";
import { Rutas } from "../Principal/Rutas";

export default function Error_Logica() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(Rutas.AppRouter);
  };

  return { handleBack };
}

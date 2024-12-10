import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Home_Logica() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    // Leer datos del local storage
    const storedUsername = localStorage.getItem("Usuario");
    const storedEmail = localStorage.getItem("Correo");

    // Actualizar el estado con los datos leídos
    if (storedUsername) {
      setUsername(storedUsername);
    }

    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      alert("¡No tiene los permisos necesarios para estar en esta sección!");
      navigate(-1);
    }
  }, []);

  return { username, email };
}

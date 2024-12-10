import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rutas } from "../Principal/Rutas";

export default function LoginForm_Logica() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const url = "/public/basedeusuarios/usuarios.json";
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    axios(url).then((response) => setDatos(response.data.users));
  }, [url]);

  const usuario_encontrado = datos.find(
    (user) => user.username === username && user.password === password
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (usuario_encontrado) {
      console.log("Login exitoso");
      setEmail(usuario_encontrado.email);
      console.log("Usuario:", username);
      console.log("Contraseña:", password);
      localStorage.setItem("Usuario", username);
      sessionStorage.setItem("Usuario", username);
      localStorage.setItem("Correo", usuario_encontrado.email);
      sessionStorage.setItem("Correo", usuario_encontrado.email);
      navigate(Rutas.Home);
    } else {
      console.log("Usuario o Password Incorrectos");
      setUsername("");
      setPassword("");

      navigate(Rutas.ErrorUsuarioPassword);
    }
  };

  return { username, setUsername, password, setPassword, handleSubmit, email };
}

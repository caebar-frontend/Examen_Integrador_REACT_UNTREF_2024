import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar datos del Local Storage
    localStorage.removeItem("Correo");
    localStorage.removeItem("Usuario");

    // Eliminar datos del Session Storage
    sessionStorage.removeItem("Correo");
    sessionStorage.removeItem("Usuario");

    // Redirigir al formulario de inicio de sesión
    navigate(-1);
  };

  return { handleLogout };
}

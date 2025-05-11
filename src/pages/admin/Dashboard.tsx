import { useAuth } from '../../context/AuthContext';

export default function AdminDashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="container mt-4">
      <h2>Zona Administrador</h2>
      <p>Bienvenido, {user?.nombre}</p>
      <button onClick={logout} className="btn btn-danger">Cerrar sesión</button>
    </div>
  );
}

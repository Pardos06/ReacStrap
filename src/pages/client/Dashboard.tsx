import { useAuth } from '../../context/AuthContext';

export default function ClientDashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="container mt-4">
      <h2>Zona Cliente</h2>
      <p>Bienvenido, {user?.nombre}</p>
      <button onClick={logout} className="btn btn-secondary">Cerrar sesión</button>
    </div>
  );
}

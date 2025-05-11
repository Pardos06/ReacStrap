import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.rol === 'Administrador') navigate('/admin');
    else if (user?.rol === 'Cliente') navigate('/cliente');
  }, [user, navigate]);

  return (
    <div className="container mt-5">
      <h1>Bienvenido a Technology Fix</h1>
      <p>Por favor inicia sesión para continuar.</p>
    </div>
  );
}
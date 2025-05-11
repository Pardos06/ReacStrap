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

  return  navigate('/');
}
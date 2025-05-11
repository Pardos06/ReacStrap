import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Agregar el script JS dinámicamente al cargar el componente
    const script = document.createElement('script');
    script.src = './home.js'; // Ruta al archivo JS
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Limpiar el script cuando el componente se desmonta
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password, remember);
    navigate('/');
  };

  return (
    <div className="login-container">
      <button
        id="home-button"
        className="btn btn-secondary mt-3"
        onClick={() => window.location.href = '/home'}  // Función para redirigir
      >
        Regresar
      </button>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
            className="form-check-input"
          />
          <label className="form-check-label">Recordarme</label>
        </div>
        <button type="submit" className="btn btn-primary">Ingresar</button>
      </form>
    </div>
  );
}

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import LoginPage from '../pages/LoginPage';
import PrivateRoute from '../components/PrivateRoute';
import Home from '../pages/Home';
import AdminDashboard from '../pages/admin/Dashboard';
import ClientDashboard from '../pages/client/Dashboard';

export default function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/admin/*"
            element={
              <PrivateRoute allowedRoles={['Administrador']}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/cliente/*"
            element={
              <PrivateRoute allowedRoles={['Cliente']}>
                <ClientDashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

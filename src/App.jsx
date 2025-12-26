import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddFood from "./pages/AddFood";
import ProtectedRoute from "./components/ProtectedRoute";
import QRcode from "./pages/QRcode";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-food"
          element={
            <ProtectedRoute>
              <AddFood />
            </ProtectedRoute>
          }
        />
        <Route
          path="/qrcode"
          element={
            <ProtectedRoute>
              <QRcode />
            </ProtectedRoute>
          }
        />



        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  // ⏳ WAIT for Firebase to load
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  // 🔒 Not logged in
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // ✅ Logged in
  return children;
}

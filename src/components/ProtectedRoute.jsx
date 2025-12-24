import { useEffect, useState } from "react";
import { auth } from "../firebase";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return unsub;
  }, []);

  if (user === undefined) return <p>Loading...</p>;
  if (!user) return (window.location.href = "/");

  return children;
}

import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function FoodTable() {
  const [foods, setFoods] = useState([]);

  const loadFoods = async () => {
    const snapshot = await getDocs(collection(db, "foods"));
    setFoods(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => {
    loadFoods();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "foods", id));
    loadFoods();
  };

  return (
    <table className="w-full border">
      <thead>
        <tr className="border-b">
          <th>Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {foods.map((f) => (
          <tr key={f.id} className="border-b">
            <td>{f.name}</td>
            <td>${f.price}</td>
            <td>
              <button
                onClick={() => handleDelete(f.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

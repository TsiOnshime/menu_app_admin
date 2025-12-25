import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import MenuQRCode from "../components/MenuQRCode";


export default function FoodTable() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const snapshot = await getDocs(collection(db, "foods"));
    const data = snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));
    setItems(data);
  };

  /* ---------------- UPDATE ---------------- */
  const handleUpdate = async () => {
    if (!editingItem) return;

    const ref = doc(db, "foods", editingItem.id);

    await updateDoc(ref, {
      name: editingItem.name,
      price: editingItem.price,
      description: editingItem.description,
      category: editingItem.category,
    });

    setEditingItem(null);
    fetchItems();
  };

  /* ---------------- DELETE ---------------- */
  const handleDelete = async (itemId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (!confirmDelete) return;

    await deleteDoc(doc(db, "foods", itemId));
    fetchItems();
  };

  return (
    <>
      {/* TABLE */}
      <MenuQRCode />
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-600">
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Item</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50 transition"
              >
                {/* IMAGE */}
                <td className="px-4 py-3">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>

                {/* NAME + DESCRIPTION */}
                <td className="px-4 py-3">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {item.description}
                  </p>
                </td>

                {/* CATEGORY */}
                <td className="px-4 py-3 capitalize">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      {
                        item.category === "drink"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-orange-100 text-orange-600"
                      }`}
                    Birr
                  >
                    {item.category}
                  </span>
                </td>

                {/* PRICE */}
                <td className="px-4 py-3 font-bold">{item.price}Birr</td>

                {/* ACTIONS */}
                <td className="px-4 py-3 flex gap-4">
                  <button
                    onClick={() => setEditingItem(item)}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 font-semibold hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* EDIT MODAL */}
      {editingItem && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Item</h2>

            <input
              className="w-full border p-2 rounded mb-3"
              value={editingItem.name}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  name: e.target.value,
                })
              }
            />

            <textarea
              className="w-full border p-2 rounded mb-3"
              value={editingItem.description}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  description: e.target.value,
                })
              }
            />

            <input
              type="number"
              className="w-full border p-2 rounded mb-3"
              value={editingItem.price}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  price: e.target.value,
                })
              }
            />

            <select
              className="w-full border p-2 rounded mb-4"
              value={editingItem.category}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  category: e.target.value,
                })
              }
            >
              <option value="food">Food</option>
              <option value="drink">Drink</option>
            </select>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditingItem(null)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-orange-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useState } from "react";
import styles from "./App.module.css";

interface ShoppingListItem {
  id: number;
  name: string;
  quantity: number;
}

const App = () => {
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const addItem = () => {
    setError("");
    setSuccess("");

    if (name.trim().length === 0) {
      setError("Name must not be empty");
      return;
    }
    if (quantity <= 0) {
      setError("Quantity must be greater than 0");
      return;
    }

    setShoppingList([...shoppingList, { id: Date.now(), name: name.trim(), quantity }]);
    setName("");
    setQuantity(0);
    setSuccess("Item added to shopping list");
  };

  const removeItem = (id: number) => {
    setShoppingList(shoppingList.filter((item) => item.id !== id));
    setError("");
    setSuccess("Item removed from shopping list");
  };

  return (
    <div style={{ width: 500 }}>
      {error && <div className={styles.error}>{error}</div>}
      {success && <div className={styles.success}>{success}</div>}

      <div style={{ padding: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "100px 1fr" }}>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value) || 0)}
          />
        </div>
        <button onClick={addItem}>Add</button>
      </div>

      <table>
        <thead>
          <tr>
            <th style={{ width: 400 }}>Name</th>
            <th>Quantity</th>
            <th style={{ width: 100 }}></th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
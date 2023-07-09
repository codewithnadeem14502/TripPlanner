import "./App.css";

import Logo from "./component/Logo";
import Form from "./component/Form";
import PackageList from "./component/PackageList";
import Status from "./component/Status";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }
  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackageList
        items={items}
        onDeleteItem={handleDelete}
        onToggle={handleToggle}
      />
      <Status items={items} />
    </div>
  );
}

export default App;

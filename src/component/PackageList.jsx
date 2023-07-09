import React from "react";
import "../index.css";
import Item from "./Item";

const PackageList = ({ items, onDeleteItem, onToggle }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackageList;

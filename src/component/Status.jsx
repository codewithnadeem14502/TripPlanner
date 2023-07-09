import React from "react";
import "../index.css";
const Status = ({ items }) => {
  if (!items.length) {
    return (
      <>
        <p className="stats">
          <em>Start adding some items to your packed list 🚀</em>
        </p>
        <div className="copyright">
          <h3>All copyright are reversed by @codeiwthnadeem</h3>
        </div>
      </>
    );
  }
  const numItem = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const prec = Math.round((itemPacked / numItem) * 100);
  return (
    <footer>
      <div className="stats">
        <em>
          {prec === 100
            ? `Your got everything! Ready to go ✈️`
            : `  💼 You have ${numItem} items on your list,and you already packed${" "}
          ${itemPacked} (${prec}%) items`}
        </em>
      </div>
      <div className="copyright">
        <h3>All copyright are reversed by @codeiwthnadeem</h3>
      </div>
    </footer>
  );
};

export default Status;

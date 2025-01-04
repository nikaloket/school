import React, { useState } from "react";

const Store = ({ points, setPoints }) => {
  const [items, setItems] = useState([
    { id: 1, name: "Pencil", cost: 10, image: "/images/pencil.jpg" },
    { id: 2, name: "Notebook", cost: 20, image: "/images/notebook.jpg" },
    { id: 3, name: "Eraser", cost: 5, image: "/images/eraser.jpg" },
    { id: 4, name: "Backpack", cost: 50, image: "/images/backpack.jpg" },
    { id: 5, name: "Water Bottle", cost: 30, image: "/images/water_bottle.jpg" },
    { id: 6, name: "Calculator", cost: 100, image: "/images/calculator.jpg" },
    { id: 7, name: "Geometry Box", cost: 70, image: "/images/geometry_box.jpg" },
    { id: 8, name: "Art Supplies", cost: 40, image: "/images/art_supplies.jpg" },
    { id: 9, name: "Headphones", cost: 120, image: "/images/headphones.jpg" },
  ]);

  const handleBuy = (item) => {
    if (points >= item.cost) {
        
      setPoints(points - item.cost);
      alert(`You have successfully bought ${item.name}!`);
    } else {
      alert("Not enough points to buy this item.");
    }
  };

  return (
    <div className="store">
      <h2 className="store-title">Rewards Store</h2>
      <div className="points-container">
        <span className="points-badge">Your Points: {points}</span>
      </div>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="store-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3 className="item-name">{item.name}</h3>
            <p className="item-cost">{item.cost} points</p>
            <button
              className="btn btn-buy"
              onClick={() => handleBuy(item)}
              disabled={points < item.cost}
            >
              {points >= item.cost ? "Buy" : "Not Enough Points"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;

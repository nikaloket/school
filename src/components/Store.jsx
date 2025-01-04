import React, { useEffect, useState } from 'react';
import storeData from '../data/store.json';

const Store = () => {
  const [store, setStore] = useState([]);
  const [points, setPoints] = useState(100);

  useEffect(() => {
    setStore(storeData);
  }, []);

  const handlePurchase = (itemCost) => {
    if (points >= itemCost) {
      setPoints(points - itemCost);
      alert('Purchase successful!');
    } else {
      alert('Not enough points!');
    }
  };

  return (
    <div className="container mt-4">
      <h2 style={{ color: '#6c63ff' }}>Rewards Store</h2>
      <div className="points-display">Your Points: {points}</div>
      <div>
        {store.map((item) => (
          <div key={item.id} className="store-item">
            <span>{item.item}</span>
            <span>
              {item.points} points
              <button
                onClick={() => handlePurchase(item.points)}
              >
                Buy
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;

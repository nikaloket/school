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
      <h2>Rewards Store</h2>
      <p>Your Points: {points}</p>
      <ul>
        {store.map((item) => (
          <li key={item.id}>
            {item.item} - {item.points} points
            <button onClick={() => handlePurchase(item.points)} className="btn btn-primary ml-2">Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Store;
